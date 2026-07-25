import React, { use } from 'react';
import { useForm } from 'react-hook-form';

const dataResponse = fetch('/branches.json').then(res => res.json());

const PriceCalculator = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const districts = use(dataResponse).map(b => b.district);
    // console.log(districts);

    const submitHandler = (data) => {
        const isSameDistrict = data.sender_district === data.receiver_district;
        const isDocument = data.parcel_type == 'document';
        const weight = parseFloat(data.weight);

        let cost = 0;
        if (isDocument) {
            cost = isSameDistrict ? 60 : 80;
        }
        else {
            if (weight <= 3) {
                cost = isSameDistrict ? 110 : 150;
            }
            else {
                cost = isSameDistrict ? 110 : 150;
                const extraCost = (weight - 3) * 40 + (isSameDistrict ? 0 : 40);
                cost += extraCost;
            }
        }
        console.log('Total Cost:', cost);
        document.getElementById('total_cost').innerText = cost;
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
                            <label className="label font-bold">Delivary From</label>

                            <select type="text" {...register("sender_district", { required: true })} className="input bg-white w-full" placeholder="Sender District">
                                <option className='opacity-70'>Select District</option>
                                {
                                    districts.map((district, index) => <option key={index}>{district}</option>)
                                }
                            </select>

                            {/* District  */}
                            <label className="label font-bold">Delivary Destination</label>

                            <select type="text" {...register("receiver_district", { required: true })} className="input bg-white w-full" placeholder="Reciever District">
                                <option className='opacity-70'>Select Destination</option>
                                {
                                    districts.map((district, index) => <option key={index}>{district}</option>)
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
                    <h1 className='text-5xl font-bold text-secondary'> <span id="total_cost">0</span> tk</h1>
                </div>
            </div>
        </section>
    );
};

export default PriceCalculator;