import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import { CgDetailsMore } from 'react-icons/cg';
import { CiEdit } from 'react-icons/ci';
import { FaTrashCan } from 'react-icons/fa6';

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
                            <th>Reciever Phone</th>
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
                                <td>
                                    {parcel.receiver_phone}
                                </td>
                                <td className='flex gap-2'>
                                    <button className='btn hover:bg-primary'>
                                        Accept
                                    </button>
                                    <button className='btn hover:bg-warning'>
                                        Reject
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