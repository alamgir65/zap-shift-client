import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router';
import img from '../../assets/agent-pending.png'

const RiderForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const data = useLoaderData();
    const districts = data.map(d => d.district);

    const submitHandler = (data) => {
        console.log(data);
    }
    return (
        <>
            <section className='bg-white m-4 sm:m-10 p-5 sm:p-15 rounded-2xl'>
                <div>
                    <h1 className='text-3xl font-bold text-secondary mb-3'>Be a Rider</h1>
                    <p className='text-sm opacity-80'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal <br /> packages to business shipments — we deliver on time, every time.</p>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 mt-10 items-center gap-8'>
                    <div>
                        <form onSubmit={handleSubmit(submitHandler)} className='bg-white'>
                            <fieldset className="fieldset w-full">

                                <div className='flex gap-4'>
                                    <div className='flex-1'>
                                        {/* Name  */}
                                        <label className="label font-bold">Your Name</label>
                                        <input type="text" {...register("name", { required: true })} className="input bg-white w-full" placeholder="Your Name" />
                                        {
                                            errors.name?.type === 'required' && <p className='text-[12px] text-red-500'>Name must needed.</p>
                                        }
                                    </div>
                                    <div className='flex-1'>
                                        {/* Name  */}
                                        <label className="label font-bold">Your age</label>
                                        <input type="text" {...register("age", { required: true })} className="input bg-white w-full" placeholder="Your age" />
                                        {
                                            errors.age?.type === 'required' && <p className='text-[12px] text-red-500'>Age must needed.</p>
                                        }
                                    </div>
                                </div>

                                <div className='flex gap-4'>
                                    <div className='flex-1'>
                                        {/* Email  */}
                                        <label className="label font-bold">Email</label>
                                        <input type="email" {...register("email", { required: true })} className="input bg-white w-full" placeholder="Email" />
                                        {
                                            errors.email?.type === 'required' && <p className='text-[12px] text-red-500'>Email must needed.</p>
                                        }
                                    </div>
                                    <div className='flex-1'>
                                        {/* District  */}
                                        <label className="label font-bold">Select District</label>

                                        <select type="text" {...register("district", { required: true })} className="input bg-white w-full" placeholder="District">
                                            <option className='opacity-70'>Select District</option>
                                            {
                                                districts.map((district, index) => <option key={index}>{district}</option>)
                                            }
                                        </select>
                                    </div>
                                </div>

                                <div className='flex gap-4'>
                                    <div className='flex-1'>
                                        {/* NID  */}
                                        <label className="label font-bold">NID</label>
                                        <input type="email" {...register("nid", { required: true })} className="input bg-white w-full" placeholder="NID no" />
                                        {
                                            errors.nid?.type === 'required' && <p className='text-[12px] text-red-500'>NID number must needed.</p>
                                        }
                                    </div>
                                    <div className='flex-1'>
                                        {/* Contact  */}
                                        <label className="label font-bold">Contact</label>
                                        <input type="text" {...register("contact", { required: true })} className="input bg-white w-full" placeholder="Contact" />
                                        {
                                            errors.contact?.type === 'required' && <p className='text-[12px] text-red-500'>Contact must needed.</p>
                                        }
                                    </div>
                                </div>

                                {/* Wirehouse details  */}
                                <label className="label font-bold">Which wire-house you want to work?</label>
                                <select type="text" {...register("wirehouse", { required: true })} className="input bg-white w-full">
                                    <option className='opacity-70'>Select District</option>
                                    {
                                        districts.map((district, index) => <option key={index}>{district}</option>)
                                    }
                                </select>
                                {
                                    errors.name?.type === 'required' && <p className='text-[12px] text-red-500'>Name must needed.</p>
                                }
                                <button type='submit' className="btn btn-primary text-black mt-4">Submit</button>
                            </fieldset>
                        </form>
                    </div>
                    <div className='p-7 flex justify-end'>
                        <img className='w-[80%]' src={img} alt="" />
                    </div>
                </div>
            </section>
        </>

    );
};

export default RiderForm;