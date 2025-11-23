import React from 'react';
import { useLoaderData } from 'react-router';

const Payment = () => {
    const parcel = useLoaderData();
    console.log(parcel);
    return (
        <div>
            make you payment
        </div>
    );
};

export default Payment;