import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { employeeServiceFactory } from '../services/empolyeeService';
import { authContext } from "./autContext";

export const employeeContex = createContext();

export const EmployeeProvider = ({
    children
}) => {
    const navigate = useNavigate();
    const { token } = useContext(authContext);
    const [employees, setEmployees] = useState([]);

    const employeeService = employeeServiceFactory(token);

    useEffect(() => {
        employeeService.getAll()
            .then(result => {
                setEmployees(result);
            })
    }, []);

    const onEmployeeCreateSubmit = async (data) => {
        try {
            const newEmployee = await employeeService.create(data);

            setEmployees(state => [...state, newEmployee]);

            navigate('/employees');
        } catch (error) {
            console.log('Error onEmployeeCreateSubmit:' + error);
        }
    };

    const onEditEmployeeSubmit = async (values) => {
        const result = await employeeService.edit(values._id, values);

        setEmployees(state => state.map(e => e._id === values._id ? result : e));

        navigate('/employees');
    };

    const context = {
        employees,
        onEmployeeCreateSubmit,
        onEditEmployeeSubmit
    }

    return(
        <employeeContex.Provider value={context}>
            {children}
        </employeeContex.Provider>
    );
};

