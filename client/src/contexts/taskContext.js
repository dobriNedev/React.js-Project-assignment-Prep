import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { taskServiceFactory } from '../services/taskService';
import { authContext } from "./autContext";

export const taskContext = createContext();

export const TaskProvider = ({
    children
}) => {
    const navigate = useNavigate();
    const { token } = useContext(authContext);
    const [tasks, setTasks] = useState([]);

    const taskService = taskServiceFactory(token);

    useEffect(() => {
        taskService.getAll()
            .then(result => {
                setTasks(result);
            })
    }, []);

    const onTaskCreateSubmit = async (data) => {
        try {
            const newTask = await taskService.create(data);

            setTasks(state => [...state, newTask]);

            navigate('/tasks');
        } catch (error) {
            console.log('Error onTaskCreateSubmit:' + error);
        }
    };

    const onTaskEditSubmit = async (values) => {
        const result = await taskService.edit(values._id, values);

        setTasks(state => state.map(t => t._id === values._id ? result : t));

        navigate('/tasks');
    };

    const onAssignTaskSubmit = async (values) => {
        const result = await taskService.edit(values._id, values);

        setTasks(state => state.map(t => t._id === values._id ? result : t));

        navigate('/tasks');
    }

    const context = {
        tasks,
        onTaskCreateSubmit,
        onTaskEditSubmit,
        onAssignTaskSubmit
    }

    return(
        <taskContext.Provider value={context}>
            {children}
        </taskContext.Provider>
    );
};