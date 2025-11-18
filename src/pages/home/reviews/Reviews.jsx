import React, { use } from 'react';
import img from '../../../assets/customer-top.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Review from './Review';

const Reviews = ({ reviewPromise }) => {
    const reviews = use(reviewPromise);
    console.log(reviews);
    return (
        <div>
            <div className='flex justify-center my-5'>
                <img src={img} alt="" />
            </div>
            <div className='text-center'>
                <h3 className="text-3xl font-bold text-secondary mb-2">What our customers are sayings</h3>
                <p className='text-sm opacity-80'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
            </div>
            <div>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    {
                        reviews.map(review_single => <SwiperSlide key={review_single.id}>
                            <Review review_single={review_single}></Review>
                        </SwiperSlide>
                        )
                    }

                </Swiper>
            </div>
        </div>
    );
};

export default Reviews;