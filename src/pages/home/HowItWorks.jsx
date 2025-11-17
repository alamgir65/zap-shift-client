import React from 'react';
import icon from '../../assets/bookingIcon.png';

const HowItWorks = () => {
    return (
        <div className='px-[5%] my-15'>
            <h1 className='text-3xl font-bold'>How it Works</h1>
            <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5'>
                <div className='p-5 rounded-lg bg-white'>
                    <img src={icon} alt="" />
                    <h3 className='text-xl font-bold my-2 text-secondary'>Booking Pick & Drop</h3>
                    <p className='opacity-80 font-medium'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
                <div className='p-5 rounded-lg bg-white'>
                    <img src={icon} alt="" />
                    <h3 className='text-xl font-bold my-2 text-secondary'>Cash On Delivery</h3>
                    <p className='opacity-80 font-medium'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
                <div className='p-5 rounded-lg bg-white'>
                    <img src={icon} alt="" />
                    <h3 className='text-xl font-bold my-2 text-secondary'>Delivery Hub</h3>
                    <p className='opacity-80 font-medium'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
                <div className='p-5 rounded-lg bg-white'>
                    <img src={icon} alt="" />
                    <h3 className='text-xl font-bold my-2 text-secondary'>Booking SME & Corporate</h3>
                    <p className='opacity-80 font-medium'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;