import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImg3 from '../../../assets/banner/banner3.png'
import './Banner.css'; // Create this CSS file for custom styles
import { FaSquareArrowUpRight } from "react-icons/fa6";
import tiny from '../../../assets/tiny-deliveryman.png';
import big from '../../../assets/big-deliveryman.png';
import big2 from '../../../assets/big2.png';
import big3 from '../../../assets/big3.png';


const Banner = () => {
    return (
        <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false} // This removes the small slide images
            showStatus={false}
            interval={3000}
            stopOnHover={true}
        >
            <div className='bg-white px-7 sm:px-15 py-6 sm:py-11 rounded-xl flex flex-col-reverse sm:flex-row gap-4 sm:gap-10'>
                <div className='flex-1'>
                    <div className='w-[50%]'>
                        <img className='w-full' src={tiny} alt="" />
                    </div>
                    <h1 className='text-4xl text-start sm:text-6xl font-bold text-secondary py-4'>
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
                <div className='flex-1 float-none sm:float-right'>
                    <img className='w-[95%] sm:w-[60%] float-right' src={big} alt="" />
                </div>
            </div>
            <div className='bg-white px-7 sm:px-15 py-6 sm:py-11 rounded-xl flex flex-col-reverse sm:flex-row gap-4 sm:gap-10'>
                <div className='flex-1'>
                    <h1 className='text-4xl text-start sm:text-6xl font-bold text-secondary py-4'>
                        Fastest <br /><span className='text-[#93bf0f]'>Delivery</span> & Easy <span className='text-[#93bf0f]'>Pickup</span>
                    </h1>
                    <p className='text-base font-light mb-4'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
                    <div className='flex gap-5'>
                        <div className='flex items-center'>
                            <button className="banner-btn btn bg-primary rounded-4xl px-8">Track Your Parcel <FaSquareArrowUpRight className='text-3xl' /></button>
                        </div>
                        <button className="banner-btn banner-rider-btn btn text-[14px] btn-outline bg-white">Be A Rider</button>
                    </div>
                </div>
                <div className='flex-1 float-none sm:float-right'>
                    <img className='w-[95%] sm:w-[60%] float-right' src={big2} alt="" />
                </div>
            </div>
            <div className='bg-white px-7 sm:px-15 py-6 sm:py-11 rounded-xl flex flex-col-reverse sm:flex-row gap-4 sm:gap-10'>
                <div className='flex-1'>
                    <h1 className='text-4xl text-start sm:text-6xl font-bold text-secondary py-4'>
                        Delivery in <span className='text-[#93bf0f]'>30 Minutes</span> at your doorstep
                    </h1>
                    <p className='text-base font-light mb-4'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
                    <div className='flex gap-5'>
                        <div className='flex items-center'>
                            <button className="banner-btn btn bg-primary rounded-4xl px-8">Track Your Parcel <FaSquareArrowUpRight className='text-3xl' /></button>
                        </div>
                        <button className="banner-btn banner-rider-btn btn text-[14px] btn-outline bg-white">Be A Rider</button>
                    </div>
                </div>
                <div className='flex-1 float-none sm:float-right'>
                    <img className='w-[95%] sm:w-[60%] float-right' src={big3} alt="" />
                </div>
            </div>
        </Carousel>
    );
};

export default Banner;