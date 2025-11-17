import React from 'react';
import delivaryImg from '../../../assets/safe-delivery.png';
import liveTrack from '../../../assets/live-tracking.png';
import safe from '../../../assets/big-deliveryman.png'

const Features = () => {
    return (
        <div className='my-10'>
            <div class="border-t-3 border-dotted border-gray-400 mb-10"></div>

            <div className='flex gap-6 bg-white items-center rounded-lg p-5'>
                <div className='w-50 sm:65'>
                    <img className='w-full' src={liveTrack} alt="" />
                </div>
                <div class="border-l-2 border-dotted border-gray-300 h-30"></div>
                <div>
                    <h3 className="text-2xl font-bold text-secondary">Live Parcel Tracking</h3>
                    <p className='text-sm opacity-80 mt-3'>Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.</p>
                </div>
            </div>
            <div className='flex gap-6 bg-white items-center rounded-lg p-5 my-5'>
                <div className='w-50 sm:65'>
                    <img className='w-full' src={safe} alt="" />
                </div>
                <div class="border-l-2 border-dotted border-gray-300 h-30"></div>
                <div>
                    <h3 className="text-2xl font-bold text-secondary">100% Safe Delivery</h3>
                    <p className='text-sm opacity-80 mt-3'>We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.</p>
                </div>
            </div>
            <div className='flex gap-6 bg-white items-center rounded-lg p-5'>
                <div className='w-50 sm:65'>
                    <img className='w-full' src={delivaryImg} alt="" />
                </div>
                <div class="border-l-2 border-dotted border-gray-300 h-30"></div>
                <div>
                    <h3 className="text-2xl font-bold text-secondary">24/7 Call Center Support</h3>
                    <p className='text-sm opacity-80 mt-3'>Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.</p>
                </div>
            </div>
            <div class="border-t-3 border-dotted border-gray-400 mt-15"></div>
        </div>
    );
};

export default Features;