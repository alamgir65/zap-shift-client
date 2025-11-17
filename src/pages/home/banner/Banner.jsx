import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import bannerImg1 from '../../../assets/banner/banner1.png'
import bannerImg2 from '../../../assets/banner/banner2.png'
import bannerImg3 from '../../../assets/banner/banner3.png'
import './Banner.css'; // Create this CSS file for custom styles
import { FaSquareArrowUpRight } from "react-icons/fa6";



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
            <div>
                <img src={bannerImg1} alt="Banner 1" />
                <div className="banner-content">
                    <p>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
                    <div className='flex gap-5'>
                        <div className='flex items-center'>
                            <button className="banner-btn btn bg-primary rounded-4xl px-8">Track Your Parcel</button> <FaSquareArrowUpRight className='text-3xl'/>
                        </div>
                        <button className="banner-btn btn text-[14px] btn-outline bg-white">Be A Rider</button>
                    </div>
                </div>
            </div>
            <div>
                <img src={bannerImg2} alt="Banner 2" />
                <div className="banner-content">
                    <p>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
                    <div className='flex gap-5'>
                        <div className='flex items-center'>
                            <button className="banner-btn btn bg-primary rounded-4xl px-8">Track Your Parcel</button> <FaSquareArrowUpRight className='text-3xl'/>
                        </div>
                        <button className="banner-btn btn text-[14px] btn-outline bg-white">Be A Rider</button>
                    </div>
                </div>
            </div>
            <div>
                <img src={bannerImg3} alt="Banner 3" />
                <div className="banner-content">
                    <p>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
                    <div className='flex gap-5'>
                        <div className='flex items-center'>
                            <button className="banner-btn btn bg-primary rounded-4xl px-8">Track Your Parcel</button> <FaSquareArrowUpRight className='text-3xl'/>
                        </div>
                        <button className="banner-btn btn text-[14px] btn-outline bg-white">Be A Rider</button>
                    </div>
                </div>
            </div>
        </Carousel>
    );
};

export default Banner;