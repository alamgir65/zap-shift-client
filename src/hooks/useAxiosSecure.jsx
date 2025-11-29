import axios from 'axios';
import React, { useEffect } from 'react';
import useAuth from './useAuth';

const axiosSecure = axios.create({
    baseURL: 'http://localhost:3000'
});

const useAxiosSecure = () => {
    const {user,logout} = useAuth();

    useEffect(()=>{
        // Add a request interceptor
        const reqInterceptor = axiosSecure.interceptors.request.use((config) => {
            config.headers.Authorization = `Bearer ${user?.accessToken}`;
            return config;
        });

        const resInterceptor = axiosSecure.interceptors.response.use((response)=>{
            return response;
        }, (error)=>{
            console.log(error);
            const status = error.status;
            if(status === 401 || status === 403){
                logout()
                    .then(()=>{
                        console.log('Logout user successfully');
                    })
                    .catch(err => {
                        console.log(err);
                    })
            }
            return Promise.reject(error);
        })
 
        return ()=>{
            axiosSecure.interceptors.request.eject(reqInterceptor);
            axiosSecure.interceptors.response.eject(resInterceptor);
        }
    },[user,logout])
    return axiosSecure;
};

export default useAxiosSecure;