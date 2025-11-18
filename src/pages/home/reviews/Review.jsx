import React from 'react';
import { ImQuotesRight } from "react-icons/im";


const Review = ({ review_single }) => {
    const { user_email, userName, review, user_photoURL } = review_single;
    return (
        <div className='p-7 rounded-xl bg-white text-secondary'>
            <p className='opacity-50 text-2xl mb-5'><ImQuotesRight/></p>
            <div>
                <p className='text-sm opacity-80 mb-3'>{review}</p>
                <div class="border-t-3 border-dotted border-gray-400 "></div>
                <div className='flex gap-3 items-center mt-5'>
                    <img className='w-12 rounded-[50%]' src={user_photoURL} alt="user" />
                    <div>
                        <h4 className="text-lg font-bold">{userName}</h4>
                        <p className='text-sm'>{user_email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;