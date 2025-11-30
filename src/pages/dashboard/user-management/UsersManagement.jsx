import React, { useState } from 'react';
import { FaUserShield } from "react-icons/fa";
import { FaUserSlash } from 'react-icons/fa6';
import { RiFileEditFill } from 'react-icons/ri';
import { useLoaderData } from 'react-router';
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';


const UsersManagement = () => {
    const axiosSecure = useAxiosSecure();
    const [searchText , setSearchText]  = useState('');

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users', searchText],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users?searchText=${searchText}`);
            return res.data;
        }
    })

    const handleUserRole = (user, role) => {
        const roleInfo = {
            role: role
        }
        axiosSecure.patch(`/users/${user._id}/role`, roleInfo)
            .then(res => {
                Swal.fire({
                    title: "Do you want to change user role?",
                    showDenyButton: true,
                    showCancelButton: true,
                    confirmButtonText: "Yes",
                    denyButtonText: `No`
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire(`${user.name} is now an ${role === 'admin' ? 'admin' : 'user'}`);
                        if (res.data.modifiedCount > 0) {
                            refetch();
                        }
                    } else if (result.isDenied) {
                        Swal.fire("Changes are not saved", "", "info");
                    }
                });
            })
    }
    return (
        <div className='bg-white p-2 rounded-lg'>
            <div className='flex justify-between items-center my-5 mx-5'>
                <h3 className="text-3xl font-bold">All Users : {users.length}</h3>
                <div>
                    <label className="input bg-white">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input 
                            onChange={(e) => setSearchText(e.target.value)}
                            type="search" 
                            className="grow bg-white" placeholder="Search" />
                    </label>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>User</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Admin Action</th>
                            <th>Others Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={index}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img src={user.photoURL}
                                                    alt="Avatar" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{user.name}</div>
                                            <div className="text-sm opacity-50">United States</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {user.email}
                                </td>
                                <td>{user.role}</td>
                                <td>
                                    {
                                        user.role === 'admin' ? <button
                                            onClick={() => handleUserRole(user, 'user')}
                                            className='btn text-center bg-red-500'><FaUserSlash />
                                        </button> :
                                            <button
                                                onClick={() => handleUserRole(user, 'admin')}
                                                className='btn text-center bg-green-500'><FaUserShield />
                                            </button>
                                    }
                                </td>
                                <td>
                                    <button className='btn mr-1'><FiEdit /> </button>
                                    <button className='btn mr-1'><RiDeleteBin5Line /> </button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UsersManagement;