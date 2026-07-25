import React, { use } from 'react';
import img from '../../../assets/customer-top.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
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
            <div className='my-15'>
                <Swiper
                    loop={true}
                    effect="coverflow"
                    grabCursor={true}
                    centeredSlides={true}
                    spaceBetween={30}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 200,
                        modifier: 1,
                        scale: 0.9,
                        slideShadows: true,
                    }}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    className="mySwiper"

                    breakpoints={{
                        0: {
                            slidesPerView: 1, // sm (mobile)
                        },
                        640: {
                            slidesPerView: 2, // md (tablet)
                        },
                        1024: {
                            slidesPerView: 3, // lg (desktop)
                        },
                    }}
                >
                    {reviews.map((review_single) => (
                        <SwiperSlide key={review_single.id}>
                            <Review review_single={review_single} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Reviews;