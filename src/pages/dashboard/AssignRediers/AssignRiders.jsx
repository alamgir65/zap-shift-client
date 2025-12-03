import React, { useRef, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const AssignRiders = () => {
    const axiosSecure = useAxiosSecure();
    const assignRiderRef = useRef();
    const [selectedParcel, setSelectedParcel] = useState(null);

    const { data: parcels = [], refetch: parcelReftch } = useQuery({
        queryKey: ['parcels', 'pending-pickup'],
        queryFn: async () => {
            const res = await axiosSecure.get('/parcels?status=pending-pickup');
            return res.data;
        }
    })

    const { data: riders = [] , refetch : riderReftch} = useQuery({
        queryKey: ['riders', 'available', selectedParcel?.receiver_district],
        enabled: !!selectedParcel,
        queryFn: async () => {
            const res = await axiosSecure.get(`/riders?district=${selectedParcel?.receiver_district}&status=approved&work_status=available`);
            return res.data;
        }
    })

    const openAssignRiderModal = (parcel) => {
        setSelectedParcel(parcel);
        assignRiderRef.current.showModal();
    }

    const handleAssignRider = (rider) =>{
        const assignmentInfo = {
            rider_email: rider.email,
            parcel_id: selectedParcel._id,
            rider_name: rider.name,
            rider_id: rider._id,
            tracking_id: selectedParcel.tracking_id
        };

        axiosSecure.patch(`/parcels/${selectedParcel._id}`, assignmentInfo)
            .then(res => {
                if(res.data.modifiedCount > 0){
                    console.log('Rider assigned successfully');
                    Swal.fire(`Rider assigned to ${selectedParcel.name} successfully`);
                    parcelReftch();
                    riderReftch();
                    assignRiderRef.current.close();
                }
            })
    }
    return (
        <div>
            <h1 className='text-3xl font-bold'>Pending Pickup Parcels: {parcels.length}</h1>
            <div className="overflow-x-auto p-3 bg-white rounded-lg">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Cost</th>
                            <th>Created at</th>
                            <th>Pickup District</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            parcels.map((parcel, index) => <tr>
                                <th>{index}</th>
                                <td>{parcel.name}</td>
                                <td>{parcel.cost}</td>
                                <td>
                                    {
                                        parcel.created_at
                                    }
                                </td>
                                <td>
                                    {parcel.receiver_district}
                                </td>
                                <td className='flex gap-2'>
                                    <button
                                        onClick={() => openAssignRiderModal(parcel)}
                                        className='btn bg-primary'>Find Rider</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

            <dialog ref={assignRiderRef} className="modal">
                <div className="modal-box bg-white">
                    <h3 className="font-bold text-lg">Riders: {riders.length} </h3>
                    <div>
                        <div className="overflow-x-auto">
                            <table className="table table-zebra">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        riders.map((rider, index) => <tr key={index}>
                                            <th>{index + 1}</th>
                                            <td>{rider.name}</td>
                                            <td>{rider.email}</td>
                                            <td>
                                                <button 
                                                onClick={()=>handleAssignRider(rider)}
                                                className='btn bg-primary'>Assign</button>
                                            </td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default AssignRiders;