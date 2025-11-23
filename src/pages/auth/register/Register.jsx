import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase/firebase.init';
import axios from 'axios';

const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, signInUser, signInGoogle, profileUpdate } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const submitHandler = (data) => {
        const email = data.email;
        const password = data.password;
        const photo = data.photo[0];
        const name = data.name;
        console.log(email, password, photo);

        createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                console.log(res.user);

                // store photo url  VITE_image_host_key
                const formData = new FormData();
                formData.append("image", photo); // 🔥 FIXED

                const imageAPIURL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`;

                axios.post(imageAPIURL, formData)
                    .then(result => {
                        console.log('after image upload...', result.data);

                        // 🔥 FIXED: Use result instead of res
                        const profile = {
                            photoURL: result.data.data.url,
                            displayName: name
                        };

                        profileUpdate(profile)
                            .then(() => {
                                console.log('Profile updated successfully');
                                navigate(location?.state || '/');
                            })
                            .catch(err => console.log(err));
                    })
                    .catch(err => console.log(err));
            })
            .catch(err => {
                console.log(err);
            });
    }

    const handleGoogleLogin = () => {
        signInGoogle()
            .then(res => {
                console.log(res.user);
                navigate(location?.state || '/');
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className='w-[90%] sm:w-[70%]'>
            <h1 className='text-3xl font-extrabold'>Create an Account</h1>
            <p className='text-sm opacity-80 mb-4'>Register with zapShift</p>
            <form onSubmit={handleSubmit(submitHandler)} className='bg-white'>
                <fieldset className="fieldset w-full">

                    {/* Name  */}
                    <label className="label font-bold">Name</label>
                    <input type="text" {...register("name", { required: true })} className="input bg-white w-full" placeholder="Name" />
                    {
                        errors.name?.type === 'required' && <p className='text-[12px] text-red-500'>Name must needed.</p>
                    }
                    {/* Photo  */}
                    <label className="label font-bold">Photo</label>
                    <input {...register('photo', { required: true })} type="file" className="file-input file-input-md w-full bg-white" />
                    {
                        errors.photo?.type === 'required' && <p className='text-[12px] text-red-500'>Photo must needed.</p>
                    }

                    {/* Email  */}
                    <label className="label font-bold">Email</label>
                    <input type="email" {...register("email", { required: true })} className="input bg-white w-full" placeholder="Email" />
                    {
                        errors.email?.type === 'required' && <p className='text-[12px] text-red-500'>Email must needed.</p>
                    }

                    {/* Password  */}
                    <label className="label font-bold">Password</label>
                    <input type="password" {...register("password", { required: true, minLength: 6, pattern: /^[A-Za-z]+$/i })} className="input bg-white w-full" placeholder="Password" />
                    {
                        errors.password?.type === 'minLength' && <p className='text-[12px] text-red-500'>Password must min 6 length.</p>
                    }
                    <button type='submit' className="btn btn-primary text-black mt-4">Register</button>
                    <p className='text-sm'><span className='opacity-80 my-3'>Already have an Account?</span> <Link state={location.state} to={'/login'} className='text-primary font-bold'>Login</Link></p>
                </fieldset>
            </form>
            {/* Google */}
            <button onClick={handleGoogleLogin} className="btn bg-base-100 w-full mb-10 text-black border-[#e5e5e5]">
                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                Register with Google
            </button>
        </div>
    );
};

export default Register;