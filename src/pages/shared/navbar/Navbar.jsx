import React from 'react';
import Logo from '../../../components/logo/Logo';
import { Link, NavLink } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './Navbar.css';

const Navbar = () => {
    
    const {logout, user} = useAuth();

    const links = <>
        <li><NavLink to={'/'}>Home</NavLink> </li>
        <li><NavLink to={'/services'}>Services</NavLink> </li>
        <li><NavLink to={'/coverage'}>Coverage</NavLink> </li>
        <li><NavLink to={'/about'}>About Us</NavLink> </li>
        <li><NavLink to={'/price-calculator'}>Pricing</NavLink> </li>
        <li><NavLink to={'/be-a-rider'}>Be a Rider</NavLink> </li>
        <li><NavLink to={'/send-parcel'}>Send Parcel</NavLink> </li>
        <li><NavLink to={'/dashboard'}>Dashboard</NavLink> </li>
    </>

    const logoutHandler = () => {
        logout()
            .then(() => {
                console.log('Logout successfully');
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="navbar bg-white shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to={'/'}>
                    <Logo></Logo>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-2 px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user? <>
                        <NavLink onClick={logoutHandler} className={'btn nav-button'}>Logout</NavLink>
                    </> : <>
                        <NavLink to={'/login'} className={'btn nav-button mr-3'}>Sign In</NavLink>
                        <NavLink to={'/register'} className={'btn nav-button'}>Sign Up</NavLink>
                    </>
                }
            </div>
        </div>
    );
};

export default Navbar;