import React from 'react';
import { Link } from 'react-router';

const PaymentCancelled = () => {
    return (
        <div>
            <h1>Your payment cancelled</h1>
            <Link to={'/dashboard/my-parcels'} className="btn">Try Again</Link>
        </div>
    );
};

export default PaymentCancelled;