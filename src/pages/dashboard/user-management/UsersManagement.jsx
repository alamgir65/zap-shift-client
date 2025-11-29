import React from 'react';
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

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    const handleUserRole = (user, role) => {
        const roleInfo = {
            role: role
        }
        axiosSecure.patch(`/users/${user._id}`, roleInfo)
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
            <h3 className="text-3xl font-bold">All Users : {users.length}</h3>
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