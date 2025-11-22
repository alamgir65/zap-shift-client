import React from 'react';
import { Link, NavLink, Outlet } from 'react-router';
import './About.css'

const About = () => {
    const links = <>
            <li><NavLink to={'/about'} className={'text-lg font-semibold bg-none hover:text-primary active:text-primary'}>Story</NavLink> </li>
            <li><NavLink to={'/about/mission'} className={'text-lg font-semibold bg-none hover:text-primary active:text-primary'}>Misson</NavLink> </li>
            <li><NavLink to={'/about/success'} className={'text-lg font-semibold bg-none hover:text-primary active:text-primary'}>Success</NavLink> </li>
            <li><NavLink to={'/about/teams-others'} className={'text-lg font-semibold bg-none hover:text-primary active:text-primary'}>Teams & Other's</NavLink> </li>
        </>
    return (
        <section className='bg-white m-4 sm:m-10 p-5 sm:p-15 rounded-2xl'>
            <div>
                <h1 className='text-3xl font-bold text-secondary mb-3'>About Us</h1>
                <p className='text-sm opacity-80'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal <br /> packages to business shipments — we deliver on time, every time.</p>
            </div>
            <hr className='opacity-20 my-5'/>
            <div className='mt-10 items-center gap-8'>
                 <ul className="menu-horizontal gap-4">
                    {links}
                </ul>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </section>
    );
};

export default About;