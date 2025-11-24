import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const Payment = () => {
    // const parcel = useLoaderData();
    const { id } = useParams();
    const axiosSecure = useAxiosSecure();

    const { data: parcel, isLoading } = useQuery({
        queryKey: ['parcel', id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels/${id}`);
            return res.data;
        }
    })

    if (isLoading) {
        return <span>Loading.....</span>
    }
    console.log(parcel);

    const paymentHandler = async () => {
        const paymentInfo = {
            name: parcel.name,
            sender_email: parcel.sender_email,
            sender_id: parcel._id,
            cost: parcel.cost
        }
        const res = await axiosSecure.post('/create-checkout-session', paymentInfo);
        console.log(res.data);
        window.location.href = res.data.url;
    }

    return (
        <div>
            <p>Please pay {parcel.cost}, for {parcel.name}</p>
            <button onClick={paymentHandler} className='btn'>Pay</button>
        </div>
    );
};

export default Payment;