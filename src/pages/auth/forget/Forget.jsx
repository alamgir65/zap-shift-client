import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';

const Forget = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const submitHandler = (data) => {
        console.log(data);
    }

    return (
        <div className='w-[90%] sm:w-[70%]'>
            <h1 className='text-3xl font-extrabold'>Forget Password</h1>
            <p className='text-sm opacity-80 mb-4'>Enter your email address and we'll send you a reset link.</p>
            <form onSubmit={handleSubmit(submitHandler)} className='bg-white'>
                <fieldset className="fieldset w-full">
                    {/* Email  */}
                    <label className="label font-bold">Email</label>
                    <input type="email" {...register("eamil", { required: true })} className="input bg-white w-full" placeholder="Email" />
                    {
                        errors.email?.type === 'required' && <p className='text-[12px] text-red-500'>Email must needed.</p>
                    }
                    <button className="btn btn-primary text-black mt-4">Send</button>
                    <p className='text-sm'><span className='opacity-80 my-3'>Remember your password?</span> <Link to={'/login'} className='text-primary font-bold'>Login</Link></p>
                </fieldset>
            </form>
        </div>
    );
};

export default Forget;