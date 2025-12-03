import React from 'react';
import useAuth from '../hooks/useAuth';
import useRole from '../hooks/useRole';

const RiderRoute = ({children}) => {
    const {user,loading} = useAuth();
    const {role, roleLoading} = useRole();

    if(loading || roleLoading){
        return <progress className="progress w-56"></progress>
    }
    if(user && role !== 'rider'){
        return <div><h2 className='text-center text-3xl mt-20'>Access Denied</h2></div>
    }
    return children;
};

export default RiderRoute;