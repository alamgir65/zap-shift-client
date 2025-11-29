import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useRole = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();

    const {isLoading, data: role = 'user'} = useQuery({
        queryKey: ['user-role', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/role?email=${user?.email}`);
            return res.data;
        }
    })
    return {role, isLoading};
};

export default useRole;