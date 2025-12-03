import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import { CgDetailsMore } from 'react-icons/cg';
import { CiEdit } from 'react-icons/ci';
import { FaTrashCan } from 'react-icons/fa6';
import Swal from 'sweetalert2';

const AssignedDeliveries = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { data: parcels = [], refetch } = useQuery({
        queryKey: ['parcels', user?.email, 'devivery_status'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels/riders?rider_email=${user?.email}&delivery_status=rider-assigned`);
            return res.data;
        }
    })

    const handleUpdateDeliveryStatus = (parcel, status) => {
        const updateInfo = {
            delivery_status: status
        };

        Swal.fire({
            title: `Are you sure to update status to ${status}?`,
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/parcels/${parcel._id}/delivery-status`, updateInfo)
                    .then(res => {
                        if (res.data.modifiedCount) {
                            // console.log('Delivery accepted successfully');
                            refetch();
                            Swal.fire({
                                title: "Updated!",
                                text: "Your parcel's delivery status updated.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div>
            <h2 className="text-3xl font-bold">
                Assigned Deliveries : {parcels.length}
            </h2>
            <div className="overflow-x-auto p-3 bg-white rounded-lg mt-5">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Cost</th>
                            <th>Payment Status</th>
                            <th>Confirm</th>
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
                                    <button className="btn btn-primary text-black btn-sm">{parcel.payment_status}</button>
                                </td>
                                <td className='flex gap-2'>
                                    {
                                        parcel.delivery_status === 'rider-assigned' ? <>
                                            <button
                                                onClick={() => handleUpdateDeliveryStatus(parcel, 'rider-accepted')}
                                                className='btn hover:bg-primary'>
                                                Accept
                                            </button>
                                            <button className='btn hover:bg-warning'>
                                                Reject
                                            </button>
                                        </> : <span className='text-secondary'>Accepted</span>
                                    }
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleUpdateDeliveryStatus(parcel, 'rider-picked-up')}
                                        className={`btn bg-neutral text-white ${parcel.delivery_status === 'rider-picked-up' ? 'btn-disabled' : ''}`}
                                        disabled={parcel.delivery_status === 'rider-picked-up'}>
                                        Picked Up
                                    </button>
                                    <button
                                        onClick={() => handleUpdateDeliveryStatus(parcel, 'delivered')}
                                        className='btn bg-green-500 ms-2'>
                                        Delivered
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

export default AssignedDeliveries;