import { Navigate } from "react-router";
import { useLogout } from "../../apiHooks/authApiHooks"

export default function Logout() {
   const {isLoggedOut} = useLogout();
    return isLoggedOut
    ? <Navigate to={'/'}/>
    : null;
}

