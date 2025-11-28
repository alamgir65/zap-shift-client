import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments?email=${user?.email}`);
            return res.data;
        },
        enabled: !!user?.email // Only run query when user email exists
    })
    console.log(payments);

    const paymentHandler = () => {

    }

    return (
        <div className=''>
            <h2>All of my Payments : {payments.length}</h2>
            <div className="overflow-x-auto p-3 bg-white rounded-lg">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Parcel Info</th>
                            <th>Recipient Info</th>
                            <th>Tracking Number</th>
                            <th>Payment Info</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            payments.map((payment, index) => <tr>
                                <th>{index}</th>
                                <td>{payment.name}</td>
                                <td>{payment.parcel_name}</td>
                                <td>
                                    {payment.tracking_id}
                                </td>
                                <td>
                                    {`${payment.amount} (${payment.payment_status})`}
                                </td>
                                <td> <button className="btn">View</button> </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;