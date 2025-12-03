import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';

const CompletedDeliveries = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { data: parcels = [], refetch } = useQuery({
        queryKey: ['parcels', user?.email, 'delivered'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels/riders?rider_email=${user?.email}&delivery_status=delivered`);
            return res.data;
        }
    })

    const calculatePayout = (cost) => {
        // Assuming payout is 80% of the cost
        return (cost * 0.8).toFixed(2);
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
                            <th>Created at</th>
                            <th>Delivered at</th>
                            <th>Cost</th>
                            <th>Payout</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            parcels.map((parcel, index) => <tr>
                                <th>{index}</th>
                                <td>{parcel.name}</td>
                                <td>{parcel.created_at}</td>
                                <td>{parcel.updated_at}</td>
                                <td>{parcel.cost}</td>
                                <td>{calculatePayout(parcel.cost)}</td>
                                <td>
                                    <button
                                        className='btn btn-primary text-black ms-2'>
                                        Cashout
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

export default CompletedDeliveries;