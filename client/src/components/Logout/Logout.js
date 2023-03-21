import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../../contexts/autContext";

const Logout = () => {
    const { onLogout, token } = useContext(authContext);
    onLogout(token);
    return <Navigate to='/' />
};

export default Logout;