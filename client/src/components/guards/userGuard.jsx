import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { UserContext } from "../../contexts/userContext";

export default function UserGuard() {
    const { accessToken } = useContext(UserContext);

    if(accessToken) {
        return <Navigate to="/" />
    }
    return (
        <>
        <Outlet />
        </>
    )
}