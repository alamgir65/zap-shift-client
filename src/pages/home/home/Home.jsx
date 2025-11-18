import React from 'react';
import Banner from '../banner/Banner';
import HowItWorks from '../HowItWorks';
import Services from '../services/Services';
import Brands from '../brands/Brands';
import Features from '../features/Features';
import CustomerSatisfaction from '../customer-satisfaction/CustomerSatisfaction';
import Reviews from '../reviews/Reviews';


const reviewPromise = fetch('/reviews.json').then(res => res.json());

const Home = () => {
    return (
        <div className='my-10'>
    
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <section>
                <Services></Services>
            </section>
            <section className='px-8 sm:px-16 my-10'>
                <Brands></Brands>
            </section>
            <section className='px-8 sm:px-16 my-10'>
                <Features></Features>
            </section>
            <section className="px-8 sm:px-16 my-10">
                <CustomerSatisfaction></CustomerSatisfaction>
            </section>
            <section className='px-8 sm:px-16 my-10'>
                <Reviews reviewPromise={reviewPromise}></Reviews>
            </section>
        </div>
    );
};

export default Home;