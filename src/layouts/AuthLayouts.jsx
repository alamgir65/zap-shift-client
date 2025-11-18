import React from 'react';
import { Link, Outlet } from 'react-router';
import Logo from '../components/logo/Logo';
import authImg from '../assets/authImage.png';

const AuthLayouts = () => {
    return (
        <div className='max-w-7xl mx-auto bg-[#FFFFFF]'>
            <div className='flex flex-col sm:flex-row'>
                <div className='flex-1 p-5 h-screen'>
                    <div>
                        <Link className='text-start' to={'/'}>
                            <Logo></Logo>
                        </Link>
                    </div>
                    <div className='flex items-start sm:items-center h-screen justify-center'>
                        <Outlet></Outlet>
                    </div>
                </div>
                <div className='flex-1 bg-[#fafdf0] h-screen flex items-start sm:items-center'>
                    <img src={authImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AuthLayouts;