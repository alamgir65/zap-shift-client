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

    return (
        <div className='p-10'>
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
                                <td>100</td>
                                <td>
                                    {
                                        parcel.payment_status === 'Paid' ? <>
                                            <button className="btn btn-primary btn-sm">Paid</button>
                                        </> : <>
                                            <Link to={`/dashboard/payment/${parcel._id}`} className='btn btn-sm bg-primary'>Pay</Link>
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