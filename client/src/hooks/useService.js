import { useContext } from "react";
import { authContext } from "../contexts/autContext";

export const useService = (serviceFactory) => {
    const { token } = useContext(authContext);

    const service = serviceFactory(token);

    return service;
}