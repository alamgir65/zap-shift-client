import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const PaymentSuccess = () => {
    const axiosSecure = useAxiosSecure();
    const [searchParams] = useSearchParams();
    const session_id = searchParams.get('session_id');
    const [paymentInfo, setPaymentInfo] = useState({});
    console.log(session_id);
    useEffect(()=>{
        if(session_id){
            axiosSecure.patch(`/payment-success?session_id=${session_id}`).then(res => {
                console.log(res.data);
                setPaymentInfo({
                    transactionId: res.data.transaction_id,
                    trackingId: res.data.tracking_id
                });
            });
        }
    },[session_id,axiosSecure])
    console.log(paymentInfo)
    return (
        <div>
            <h1>Your payment successful</h1>
            <p>Transaction id :{paymentInfo.transactionId} </p>
            <p>Tracking id :{paymentInfo.trackingId} </p>
            {/* hello  */}
        </div>
    );
};

export default PaymentSuccess;