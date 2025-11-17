import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCards, EffectFade, Navigation } from 'swiper/modules';
import './Brands.css'
// barnds images
import amazon from '../../../assets/brands/amazon.png';
import casio from '../../../assets/brands/casio.png';
import monstar from '../../../assets/brands/moonstar.png';
import randstat from '../../../assets/brands/randstad.png';
import star from '../../../assets/brands/star.png';
import starPeople from '../../../assets/brands/start_people.png';
import amazonvector from '../../../assets/brands/amazon_vector.png';

const brandsLogo = [amazon, casio, monstar, amazonvector, randstat, star, starPeople];

const Brands = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold text-secondary text-center mb-10'>We've helped thousands of sales teams</h1>
            <Swiper
                loop={true}
                speed={600}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    },
                }}
                centeredSlides={true}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                navigation={true}
                grabCursor={true}
                modules={[Autoplay]}

            >
                {
                    brandsLogo.map((logo, index) => <SwiperSlide key={index}>
                        <img src={logo} alt="logo" className='brand-logo' />
                    </SwiperSlide>)
                }

            </Swiper>
        </div>
    );
};

export default Brands;