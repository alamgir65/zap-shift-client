import React from 'react';
import { useForm } from 'react-hook-form';

const PriceCalculator = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const submitHandler = (data) => {
        console.log(data);
    }
    return (
        <section className='bg-white m-4 sm:m-10 p-5 sm:p-15 rounded-2xl'>
            <div>
                <h1 className='text-3xl font-bold text-secondary mb-3'>Pricing Calculator</h1>
                <p className='text-sm opacity-80'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal <br /> packages to business shipments — we deliver on time, every time.</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 mt-10 items-center gap-8'>
                <div>
                    <form onSubmit={handleSubmit(submitHandler)} className='bg-white'>
                        <fieldset className="fieldset w-full">

                            {/* District  */}
                            <label className="label font-bold">Parcel Type</label>

                            <select type="text" {...register("parcel_type", { required: true })} className="input bg-white w-full" placeholder="District">
                                <option disabled={true} className='opacity-70'>Select District</option>
                                <option value={'document'} >Document</option>
                                <option value={'non_document'} >Non-document</option>
                            </select>

                            {/* District  */}
                            <label className="label font-bold">Delivary Destination</label>

                            <select type="text" {...register("district", { required: true })} className="input bg-white w-full" placeholder="District">
                                <option className='opacity-70'>Select Destination</option>
                                {
                                    // districts.map((district, index) => <option key={index}>{district}</option>)
                                }
                            </select>

                            {/* NID  */}
                            <label className="label font-bold">Weight(KG)</label>
                            <input type="number" {...register("weight", { required: true })} className="input bg-white w-full" placeholder="Weight" />
                            {
                                errors.weight?.type === 'required' && <p className='text-[12px] text-red-500'>Weight must needed.</p>
                            }

                           <div className='flex gap-4 mt-4'>
                             <button type='submit' className="btn btn-primary btn-outline text-black flex-1">Reset</button>
                             <button type='submit' className="btn btn-primary text-black flex-2">Calculate</button>
                           </div>
                        </fieldset>
                    </form>
                </div>
                <div className='flex justify-center items-start'>
                    <h1 className='text-5xl font-bold text-secondary'>50 tk</h1>
                </div>
            </div>
        </section>
    );
};

export default PriceCalculator;