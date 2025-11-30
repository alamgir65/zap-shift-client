import React from 'react';
import useRole from '../hooks/useRole';
import useAuth from '../hooks/useAuth';

const AdminRoutes = ({children}) => {
    const {role,roleLoading} = useRole();
    const {user, loading} = useAuth();

    if(loading || roleLoading){
        return <div>Loading...</div>
    }

    if(user && role !== 'admin'){
        return <div><h2 className='text-center text-3xl mt-20'>Access Denied</h2></div>
    }

    return children;
};

export default AdminRoutes;