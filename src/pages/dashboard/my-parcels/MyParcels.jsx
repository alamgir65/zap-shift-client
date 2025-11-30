import React, { use } from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { CgDetailsMore } from "react-icons/cg";
import { CiEdit } from "react-icons/ci";
import { FaTrashCan } from "react-icons/fa6";
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const parcelsPromise = fetch('http://localhost:3000/parcels').then(res => res.json());

const MyParcels = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    // const parcels = use(parcelsPromise);

    const { data: parcels = [], refetch, isLoading, isError, error } = useQuery({
        queryKey: ['my-parcels'],
        queryFn: async () => {
            console.log('Query is running!');
            const res = await fetch(`http://localhost:3000/parcels?email=${user?.email}`).then(res => res.json());
            console.log('Response:', res);
            return res;
        }
        // Remove enabled condition temporarily
    })

    console.log('Parcels data:', parcels);
    console.log('Is Loading:', isLoading);

    const deletePracel = (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/parcels/${id}`)
                    .then(res => {
                        console.log(res);
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    })
            }
        });
    }

    const paymentHandler = async (parcel) => {
        try {
            const paymentInfo = {
                parcel_name: parcel.name,
                percel_id: parcel._id,
                cost: parcel.cost,
                sender_email: parcel.sender_email
            }
            const res = await axiosSecure.post('/payment-checkout-session', paymentInfo);
            console.log(res.data);

            // Redirect to Stripe checkout
            if (res.data.url) {
                window.location.assign(res.data.url);
            }
        } catch (error) {
            console.error('Payment error:', error);
        }
    }

    
    // const paymentHandler2 = async (parcel) => {
    //     const paymentInfo = {
    //         name: parcel.name,
    //         sender_email: parcel.sender_email,
    //         sender_id: parcel._id,
    //         cost: parcel.cost
    //     }
    //     const res = await axiosSecure.post('/create-checkout-session', paymentInfo);
    //     console.log(res.data);
    //     window.location.href = res.data.url;
    // }

    return (
        <div className=''>
            <h2>All of my parcels : {parcels.length}</h2>
            <div className="overflow-x-auto p-3 bg-white rounded-lg">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Cost</th>
                            <th>Payment Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            parcels.map((parcel, index) => <tr>
                                <th>{index}</th>
                                <td>{parcel.name}</td>
                                <td>{parcel.cost}</td>
                                <td>
                                    {
                                        parcel.payment_status === 'paid' ? <>
                                            <button className="btn btn-primary btn-sm">Paid</button>
                                        </> : <>
                                            <button onClick={() => paymentHandler(parcel)} className='btn btn-sm bg-primary'>Pay</button>
                                        </>
                                    }
                                </td>
                                <td className='flex gap-2'>
                                    <button className='btn hover:bg-primary'>
                                        <CgDetailsMore />
                                    </button>
                                    <button className='btn hover:bg-warning'>
                                        <CiEdit />
                                    </button>
                                    <button
                                        onClick={() => deletePracel(parcel._id)}
                                        className='btn hover:bg-red-500'>
                                        <FaTrashCan />
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyParcels;