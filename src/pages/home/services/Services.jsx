import React from 'react';
import serviceIcon from '../../../assets/service.png';

const Services = () => {
    return (
        <div className='p-[6%] my-10 bg-secondary text-white text-center rounded-2xl'>
            <h1 className='text-3xl font-bold'>Our Services</h1>
            <p className='text-sm opacity-90 my-2'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
            <section className='mt-5 gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
                <div className='bg-white text-black text-center p-6 rounded-lg hover:bg-primary'>
                    <div className='flex justify-center'>
                        <img className='p-5 rounded-[50%] bg-base-100' src={serviceIcon} alt="service" />
                    </div>
                    <h3 className='text-xl font-bold my-2'>Express  & Standard Delivery</h3>
                    <p className='font-normal text-sm opacity-80'>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
                </div>
                <div className='bg-white text-black text-center p-6 rounded-lg hover:bg-primary'>
                    <div className='flex justify-center'>
                        <img className='p-5 rounded-[50%] bg-base-100' src={serviceIcon} alt="service" />
                    </div>
                    <h3 className='text-xl font-bold my-2'>Nationwide Delivery</h3>
                    <p className='font-normal text-sm opacity-80'>We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.</p>
                </div>
                <div className='bg-white text-black text-center p-6 rounded-lg hover:bg-primary'>
                    <div className='flex justify-center'>
                        <img className='p-5 rounded-[50%] bg-base-100' src={serviceIcon} alt="service" />
                    </div>
                    <h3 className='text-xl font-bold my-2'>Fulfillment Solution</h3>
                    <p className='font-normal text-sm opacity-80'>We also offer customized service with inventory management support, online order processing, packaging, and after sales support.</p>
                </div>
                <div className='bg-white text-black text-center p-6 rounded-lg hover:bg-primary'>
                    <div className='flex justify-center'>
                        <img className='p-5 rounded-[50%] bg-base-100' src={serviceIcon} alt="service" />
                    </div>
                    <h3 className='text-xl font-bold my-2'>Cash on Home Delivery</h3>
                    <p className='font-normal text-sm opacity-80'>100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.</p>
                </div>
                <div className='bg-white text-black text-center p-6 rounded-lg hover:bg-primary'>
                    <div className='flex justify-center'>
                        <img className='p-5 rounded-[50%] bg-base-100' src={serviceIcon} alt="service" />
                    </div>
                    <h3 className='text-xl font-bold my-2'>Corporate Service / Contract In Logistics</h3>
                    <p className='font-normal text-sm opacity-80'>Customized corporate services which includes warehouse and inventory management support.</p>
                </div>
                <div className='bg-white text-black text-center p-6 rounded-lg hover:bg-primary'>
                    <div className='flex justify-center'>
                        <img className='p-5 rounded-[50%] bg-base-100' src={serviceIcon} alt="service" />
                    </div>
                    <h3 className='text-xl font-bold my-2'>Parcel Return</h3>
                    <p className='font-normal text-sm opacity-80'>Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.</p>
                </div>
                
            </section>
        </div>
    );
};

export default Services;