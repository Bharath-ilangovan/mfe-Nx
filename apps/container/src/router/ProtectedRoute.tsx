import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
// import { useAuth } from '../hooks/Auth/AuthProvider';


const ProtectedRoute = () => {
    // const user = useAuth();
    // const [token, setToken] = useState<undefined | string>(undefined);
    // useEffect(() => {
    //     const key = localStorage.getItem('site') as string;
    //     setToken(key);
    // }, [])

    // if (token) return <Outlet />;

    return <Outlet />;

}

export default ProtectedRoute
