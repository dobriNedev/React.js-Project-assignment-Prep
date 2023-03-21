import { Navigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { authContext } from "../../contexts/autContext";

const Logout = () => {
    const { onLogout } = useContext(authContext);
    
    useEffect(() => {
        onLogout();
    }, [onLogout]);
    return <Navigate to='/' />
};

export default Logout;