import React from 'react';
import location from '../../../assets/location-merchant.png';
import bg from '../../../assets/be-a-merchant-bg.png';

const CustomerSatisfaction = () => {
    return (
        <div className={`p-10 bg-secondary rounded-xl text-white flex gap-8 items-center bg-top- bg-no-repeat bg-cover`} style={{ backgroundImage: `url(${bg})` }}>
            <div>
                <h3 className="text-3xl font-bold">Merchant and Customer Satisfaction is <br /> Our First Priority</h3>
                <p className="text-sm opacity-80 mt-4">We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.</p>
                <div className='flex gap-5 mt-8 items-center'>
                    <button className="btn btn-primary text-black rounded-4xl">Become a Merchant</button>
                    <button className="btn btn-primary btn-outline rounded-4xl hover:text-black">Earn with ZapShift Courier</button>
                </div>
            </div>
            <div>
                <img src={location} alt="" />
            </div>
        </div>
    );
};

export default CustomerSatisfaction;