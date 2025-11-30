import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaTrashCan, FaUserCheck } from 'react-icons/fa6';
import { FaUserTimes } from "react-icons/fa";
import Swal from 'sweetalert2';

const ApproveRiders = () => {
    const axiosSecure = useAxiosSecure();

    const {refetch, data: riders = [] } = useQuery({
        queryKey: ['riders', 'pending'],
        queryFn: async () => {
            const res = await axiosSecure.get('/riders');
            return res.data;
        }
    })

    const riderStatusHandler = (rider, status) => {
        const updatedInfo = {
            status: status,
            email: rider.email
        }
        axiosSecure.patch(`/riders/${rider._id}`, updatedInfo)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch();
                    console.log('Rider approved successfully');
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Rider has been approved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    const approveRiderHandler = rider => {
        riderStatusHandler(rider, 'approved');
    }
    const rejectRiderHandler = rider => {
        riderStatusHandler(rider, 'rejected');
    }
    return (
        <div className=''>
            <h2>All of our Riders : {riders.length}</h2>
            <div className="overflow-x-auto p-3 bg-white rounded-lg">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>NID</th>
                            <th>Application Status</th>
                            <th>Work Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            riders.map((rider, index) => <tr>
                                <th>{index}</th>
                                <td>{rider.name}</td>
                                <td>{rider.nid}</td>
                                <td>
                                    {
                                        <p className={`${rider.status === 'pending' ? 'text-warning': rider.status==='approved'? 'text-green-600': 'text-red-500'}`}>{rider.status}</p>
                                        
                                    }
                                </td>
                                <td>
                                    {rider.work_status}
                                </td>
                                <td className='flex gap-2'>
                                    <button
                                        onClick={() => approveRiderHandler(rider)}
                                        className='btn hover:bg-primary'>
                                        <FaUserCheck />
                                    </button>
                                    <button
                                        onClick={() => rejectRiderHandler(rider)}
                                        className='btn hover:bg-warning'>
                                        <FaUserTimes />
                                    </button>
                                    <button
                                        className='btn hover:bg-red-500'>
                                        <FaTrashCan />
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ApproveRiders;