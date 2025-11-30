import React from 'react';
import { Link, NavLink, Outlet } from 'react-router';
import Logo from '../components/logo/Logo';
import profile from '../assets/profile.jpg';
import { RxDashboard } from "react-icons/rx";
import { CiDeliveryTruck } from "react-icons/ci";
import { CiShop } from "react-icons/ci";
import { HiMiniTruck } from "react-icons/hi2";
import { HiMiniTag } from "react-icons/hi2";
import { LiaStoreSolid } from "react-icons/lia";
import { PiMapPinAreaBold } from "react-icons/pi";
import { RiEBike2Line, RiLockPasswordLine } from "react-icons/ri";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";
import { CgDetailsMore } from "react-icons/cg";
import { IoMdNotificationsOutline } from "react-icons/io";
import './DashboardLayouts.css';
import { FaUser } from 'react-icons/fa';
import useRole from '../hooks/useRole';


const DashboardLayouts = () => {
    const { role } = useRole();
    console.log(role);
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Navbar */}
                <nav className="navbar w-full bg-white">
                    <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
                        {/* Sidebar toggle icon */}
                        <CgDetailsMore />
                    </label>
                    <div className="px-4">Navbar Title</div>
                    <div className='navbar-end flex items-center gap-2'>
                        <div className='p-3 bg-base-300 rounded-[50%]'><IoMdNotificationsOutline /></div>
                        <div className=''> <img className='w-10 bg-base-300 rounded-[50%]' src={profile} alt="" /> </div>
                        <div>
                            <h6 className='text-base'>Alamgir Hossain</h6>
                            <p className='text-sm font-thin'>Admin</p>
                        </div>
                    </div>
                </nav>
                {/* Page content here */}
                <div className='p-2 sm:p-4 rounded-lg'>
                    <Outlet></Outlet>
                </div>
            </div>

            <div className="drawer-side is-drawer-close:overflow-visible">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
                    {/* Sidebar content here */}
                    <Link to={'/'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right">
                        <span className="is-drawer-close:hidden"><Logo></Logo> </span>
                    </Link>
                    <ul className="menu w-full grow">
                        <hr className='opacity-30 my-3' />
                        {/* List item */}
                        {/* <li>
                            <div to={'/dashboard/my-parcels'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
                                <h3 className="text-lg font-bold my-3">MENU</h3>
                            </div>
                        </li> */}
                        <li>
                            <NavLink to={'/dashboard'} className={`is-drawer-close:tooltip is-drawer-close:tooltip-right hover:bg-primary`} data-tip="Homepage">
                                {/* Home icon */}
                                <RxDashboard />
                                <span className="is-drawer-close:hidden">Homepage</span>
                            </NavLink>
                        </li>
                        <li>
                            <Link to={'/dashboard'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
                                {/* Home icon */}
                                <HiMiniTruck />
                                <span className="is-drawer-close:hidden">All Deliveries</span>
                            </Link>
                        </li>
                        <li>
                            <NavLink to={'/dashboard/my-parcels'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
                                {/* Home icon */}
                                <CiShop />
                                <span className="is-drawer-close:hidden">My Parcels</span>
                            </NavLink>
                        </li>

                        {
                            role === 'admin' && <>
                                <li>
                                    <NavLink to={'/dashboard/approve-riders'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Approve Riders">
                                        {/* Home icon */}
                                        <RiEBike2Line />
                                        <span className="is-drawer-close:hidden">Approve Riders</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/users-management'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Users Management">
                                        {/* Home icon */}
                                        <FaUser />
                                        <span className="is-drawer-close:hidden">Users Management</span>
                                    </NavLink>
                                </li>

                            </>
                        }

                        <li>
                            <NavLink to={'/dashboard/payment-history'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Payment History">
                                {/* Home icon */}
                                <CiShop />
                                <span className="is-drawer-close:hidden">Payment History</span>
                            </NavLink>
                        </li>
                        <li>
                            <Link to={'/dashboard/my-parcels'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
                                {/* Home icon */}
                                <HiMiniTag />
                                <span className="is-drawer-close:hidden">Pricing Plan</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/dashboard/my-parcels'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
                                {/* Home icon */}
                                <LiaStoreSolid />
                                <span className="is-drawer-close:hidden">Stores</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/dashboard/my-parcels'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
                                {/* Home icon */}
                                <PiMapPinAreaBold />
                                <span className="is-drawer-close:hidden">Coverage Area</span>
                            </Link>
                        </li>
                        {/* <li>
                            <div to={'/dashboard/my-parcels'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
                                <h3 className="text-lg font-bold my-3">GENERAL</h3>
                            </div>
                        </li> */}

                        {/* List item */}
                        <li>
                            <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Settings">
                                {/* Settings icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M20 7h-9"></path><path d="M14 17H5"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
                                <span className="is-drawer-close:hidden">Settings</span>
                            </button>
                        </li>
                        <li>
                            <Link to={'/dashboard/my-parcels'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
                                {/* Home icon */}
                                <RiLockPasswordLine />
                                <span className="is-drawer-close:hidden">Change Password</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/dashboard/my-parcels'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Helop">
                                {/* Home icon */}
                                <IoIosHelpCircleOutline />
                                <span className="is-drawer-close:hidden">Help</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/dashboard/my-parcels'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Logout">
                                {/* Home icon */}
                                <IoLogOutOutline />
                                <span className="is-drawer-close:hidden">Logout</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayouts;