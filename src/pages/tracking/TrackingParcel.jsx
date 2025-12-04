import React from 'react';
import useAxios from '../../hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const TrackingParcel = () => {
    const axiosInstance = useAxios();
    const axiosSecure = useAxiosSecure();
    const { tracking_id } = useParams();
    console.log(tracking_id);

    const { data: trackings = [] } = useQuery({
        queryKey: ['trackings', tracking_id, 'logs'],
        queryFn: async () => {
            const res = await axiosInstance.get(`/trackings/${tracking_id}/logs`);
            return res.data;
        },
        enabled: !!tracking_id
    })

    return (
        <div className='m-10 bg-white p-5 rounded-lg'>
            <h1>Parcel Update........ {trackings.length} </h1>
            <ul className="timeline timeline-vertical">
                {
                    trackings.map((tracking, index) => <li key={index}>
                        <div className="timeline-start">{new Date(tracking.timestamp).toLocaleString()}</div>
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="timeline-end timeline-box">{tracking.Details}</div>
                        <hr />
                    </li>)
                }
            </ul>
        </div>
    );
};

export default TrackingParcel;