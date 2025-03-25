import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router';
import { UserContext } from '../../contexts/userContext';

export default function AuthGuard() {
    const { accessToken } = useContext(UserContext);

    if(!accessToken) {
        return <Navigate to="/login" />
    }

    return (
        <>
     <Outlet />
        </>
    )
}