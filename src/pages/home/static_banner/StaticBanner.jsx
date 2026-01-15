import React from 'react';
import tiny from '../../../assets/tiny-deliveryman.png';
import big from '../../../assets/big-deliveryman.png';
import { FaSquareArrowUpRight } from 'react-icons/fa6';
import './StaticBanner.css';

const StaticBanner = () => {
    return (
        <div className='bg-white px-7 sm:px-15 py-6 sm:py-11 rounded-xl flex flex-row-reverse sm:flex-row gap-4 sm:gap-8'>
            <div className='flex-1'>
                <div>
                    <img src={tiny} alt="" />
                </div>
                <h1 className='text-6xl font-bold text-secondary py-4'>
                    We Make Sure Your <span className='text-[#33929d]'>Parcel Arrives</span> On Time - No Fuss.
                </h1>
                <p className='text-base font-light mb-4'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
                <div className='flex gap-5'>
                    <div className='flex items-center'>
                        <button className="banner-btn btn bg-primary rounded-4xl px-8">Track Your Parcel <FaSquareArrowUpRight className='text-3xl' /></button> 
                    </div>
                    <button className="banner-btn banner-rider-btn btn text-[14px] btn-outline bg-white">Be A Rider</button>
                </div>
            </div>
            <div className='flex-1 float-right'>
                <img className='w-[70%] float-right' src={big} alt="" />
            </div>
        </div>
    );
};

export default StaticBanner;