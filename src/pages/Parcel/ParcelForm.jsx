import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useLoaderData } from 'react-router';

const ParcelForm = () => {
    const data = useLoaderData();
    const { register, handleSubmit, control, formState: { errors } } = useForm();
    // const districts = data.map(d => d.district);
    const regions = [...new Set(data.map(d=>d.region))];
    const sendertRegion = useWatch({control, name: 'sender_region'});
    const receiverRegion =useWatch({control, name: 'receiver_region'});

    const districtsByRegion = (region) => {
        const filteredData = data.filter(d => d.region === region);
        const filteredDistricts = filteredData.map(d => d.district);
        // console.log('From function', filteredDistricts);
        return filteredDistricts;
    }


    const submitHandler = (data) => {
        console.log(data);
    }
    return (
        <>
            <section className='bg-white m-4 sm:m-10 p-5 sm:p-15 rounded-2xl'>
                <div>
                    <h1 className='text-3xl font-bold text-secondary mb-3'>Send a Parcel</h1>
                    <h3 className="text-xl font-bold">Enter your parcel details</h3>
                </div>
                <div className='mt-10'>
                    <form onSubmit={handleSubmit(submitHandler)} className='bg-white'>
                        <fieldset className="fieldset w-full">

                            <div>
                                <label className='label'>
                                    <input {...register('parcel_type')} value={'document'} type="radio" name="radio-5" className="radio radio-secondary" defaultChecked />
                                    Document
                                </label>
                                <label className='label ml-8'>
                                    <input {...register('parcel_type')} value={'non_document'} type="radio" name="radio-5" className="radio radio-secondary" defaultChecked />
                                    Non-Document
                                </label>
                            </div>

                            <div className='flex gap-4'>
                                <div className='flex-1'>
                                    {/* Name  */}
                                    <label className="label font-bold">Parcel Name</label>
                                    <input type="text" {...register("name", { required: true })} className="input bg-white w-full" placeholder="Parcel Name" />
                                    {
                                        errors.name?.type === 'required' && <p className='text-[12px] text-red-500'>Parcel Name must needed.</p>
                                    }
                                </div>
                                <div className='flex-1'>
                                    {/* Weight  */}
                                    <label className="label font-bold">Parcel Weight</label>
                                    <input type="text" {...register("weight")} className="input bg-white w-full" placeholder="Parcel Weight" />
                                </div>
                            </div>

                            <div className="flex gap-4 mt-5">
                                <h1 className="text-xl font-bold text-secondary flex-1">Sender Details</h1>
                                <h1 className="text-xl font-bold text-secondary flex-1">Reciever Details</h1>
                            </div>
                            <div className='flex gap-4'>
                                <div className='flex-1'>
                                    {/*Sender Name  */}
                                    <label className="label font-bold">Sender Name</label>
                                    <input type="text" {...register("sender_name", { required: true })} className="input bg-white w-full" placeholder="Sender Name" />
                                </div>
                                <div className='flex-1'>
                                    {/* Reciever Name  */}
                                    <label className="label font-bold">Receiver Name</label>
                                    <input type="text" {...register("receiver_name")} className="input bg-white w-full" placeholder="Receiver Name" />
                                </div>
                            </div>
                            <div className='flex gap-4'>
                                <div className='flex-1'>
                                    {/*Sender Name  */}
                                    <label className="label font-bold">Sender Address</label>
                                    <input type="text" {...register("sender_address", { required: true })} className="input bg-white w-full" placeholder="Sender Address" />
                                </div>
                                <div className='flex-1'>
                                    {/* Reciever Name  */}
                                    <label className="label font-bold">Receiver Address</label>
                                    <input type="text" {...register("receiver_address")} className="input bg-white w-full" placeholder="Receiver Address" />
                                </div>
                            </div>
                            <div className='flex gap-4'>
                                <div className='flex-1'>
                                    {/*Sender Name  */}
                                    <label className="label font-bold">Sender Phone No</label>
                                    <input type="number" {...register("sender_phone", { required: true })} className="input bg-white w-full" placeholder="Sender Phone" />
                                </div>
                                <div className='flex-1'>
                                    {/* Reciever Name  */}
                                    <label className="label font-bold">Receiver Phone No</label>
                                    <input type="number" {...register("receiver_phone")} className="input bg-white w-full" placeholder="Receiver Phone" />
                                </div>
                            </div>

                            <div className='flex gap-4'>
                                <div className='flex-1'>
                                    {/* District  */}
                                    <label className="label font-bold">Select Sender Region</label>

                                    <select type="text" {...register("sender_region", { required: true })} className="input bg-white w-full" placeholder="District">
                                        <option className='opacity-70'>Select Region</option>
                                        {
                                            regions.map((region, index) => <option value={region} key={index}>{region}</option>)
                                        }
                                    </select>
                                </div>
                                <div className='flex-1'>
                                    {/* District  */}
                                    <label className="label font-bold">Select Receiver Region</label>

                                    <select type="text" {...register("receiver_region", { required: true })} className="input bg-white w-full" placeholder="District">
                                        <option className='opacity-70'>Select Region</option>
                                        {
                                            regions.map((region, index) => <option value={region} key={index}>{region}</option>)
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className='flex gap-4'>
                                <div className='flex-1'>
                                    {/* District  */}
                                    <label className="label font-bold">Select Sender District</label>

                                    <select type="text" {...register("district", { required: true })} className="input bg-white w-full" placeholder="District">
                                        {/* <option className='opacity-50'>Select District</option> */}
                                        {
                                            districtsByRegion(sendertRegion).map((district, index) => <option value={district} key={index}>{district}</option>)
                                        }
                                    </select>
                                </div>
                                <div className='flex-1'>
                                    {/* District  */}
                                    <label className="label font-bold">Select Receiver District</label>

                                    <select type="text" {...register("district", { required: true })} className="input bg-white w-full" placeholder="District">
                                        <option className='opacity-70'>Select District</option>
                                        {
                                            districtsByRegion(receiverRegion).map((district, index) => <option value={district} key={index}>{district}</option>)
                                        }
                                    </select>
                                </div>
                            </div>

                             <div className='flex gap-4'>
                                <div className='flex-1'>
                                    {/*Sender Name  */}
                                    <label className="label font-bold">Pick up Instructions</label>
                                    <textarea  {...register("pickup_instructions")} className="textarea bg-white w-full" placeholder="Pick up Instructions" ></textarea>
                                </div>
                                <div className='flex-1'>
                                    {/* Reciever Name  */}
                                    <label className="label font-bold">Delivary Instructions</label>
                                    <textarea  {...register("delivary_instructions")} className="textarea bg-white w-full" placeholder="Delivary Instructions" ></textarea>
                                </div>
                            </div>
                            <button type='submit' className="btn btn-primary text-black mt-4">Proceed to Confirm Booking</button>
                        </fieldset>
                    </form>
                </div>
            </section>
        </>
    );
};

export default ParcelForm;