import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { employeeServiceFactory } from './services/empolyeeService';
import { taskServiceFactory } from './services/taskService';
import { authServiceFactory } from './services/authService';
import { authContext } from "./contexts/autContext";

import Header from "./components/Header/Header";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import DashBoard from './components/Dashboard/Dashboard';
import CreateEmployee from './components/Employees/CreateEmployee';
import EditEmployee from './components/Employees/EditEmployee';
import Employees from './components/Employees/Employees';
import EmployeeTasks from './components/Employees/EmployeeTasks';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Logout from "./components/Logout/Logout";
import AssignTask from './components/Tasks/AssignTask';
import CreateTask from './components/Tasks/CreateTask';
import EditTask from './components/Tasks/EditTask';
import Tasks from './components/Tasks/Tasks';
import PageNotFound from './components/PageNotFound/PageNotFound';


function App() {
    const navigate = useNavigate();
    const [employees, setEmployees] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [auth, setAuth] = useState({});
    const taskService = taskServiceFactory(auth.accessToken);
    const authService = authServiceFactory(auth.accessToken);
    const employeeService = employeeServiceFactory(auth.accessToken);

    useEffect(()=> {
        taskService.getAll()
        .then(result => {
            setTasks(result);
        })
    }, []);

    useEffect(() => {
        employeeService.getAll()
        .then(result => {
            setEmployees(result);
        })
    }, []);

    const onLoginSubmit = async(data) => {
        try {
            const result = await authService.login(data);
            setAuth(result);
            navigate('/');
        } catch (error) {
            console.log('Error on login:' + error);
        }
    };


    const onRegisterSubmit = async(data) => {
        const {rePass, ...restData} = data;

        if (rePass !== restData.password) {
            //TODO:add proper error handling
            return
        }

        try {
            const result = await authService.register(restData);
            setAuth(result);
            navigate('/');
        } catch (error) {
            console.log('Error on register:' + error);
        }
    }

    const onLogout = async() => { 
        try {
            await authService.logout();
            setAuth({});
        } catch (error) {
            console.log('Error on logout:' + error);
        }
    };

    const onTaskCreateSubmit = async(data) => {
        try {
            const newTask = await taskService.create(data);

            setTasks(state => [...state, newTask]);

            navigate('/tasks');
        } catch (error) {
            console.log('Error onTaskCreateSubmit:' + error);
        }
    };

    const onEmployeeCreateSubmit = async(data) => {
        try {
            const newEmployee = await employeeService.create(data);

            setEmployees(state => [...state, newEmployee]);

            navigate('/employees');
        } catch (error) {
            console.log('Error onEmployeeCreateSubmit:' + error);
        }
    };

    const onEditEmployeeSubmit = async(values) => {
        const result = await employeeService.edit(values._id, values);

        setEmployees(state => state.map(e => e._id === values._id ? result : e));

        navigate('/employees');
    };

    const onTaskEditSubmit = async(values) => {
        const result = await taskService.edit(values._id, values);

        setTasks(state => state.map(t => t._id === values._id ? result : t));

        navigate('/tasks');
    };

    const onAssignTaskSubmit = async(values) => {
        const result = await taskService.edit(values._id, values);

        setTasks(state => state.map(t => t._id === values._id ? result : t));

        navigate('/tasks');
    }
    
    const context = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        name: auth.firstName,
        isAuthenticated: !!auth.accessToken
    };

    return (
        <authContext.Provider value={context} >
        <div className="App">
            <Header />
            <Navbar />
                <main className="main">
                    <Routes>
                        <Route path="/" element={<DashBoard />} />

                        <Route path="/auth/register" element={<Register />} />
                        <Route path="/auth/login" element={<Login />} />
                        <Route path="/auth/logout" element={<Logout />} /> 

                        <Route path="/employees" element={<Employees employees={employees} tasks={tasks}/>} />
                        <Route path="/employees/create" element={<CreateEmployee onEmployeeCreateSubmit={onEmployeeCreateSubmit}/>} />
                        <Route path="/employees/:employeeId/edit" element={<EditEmployee onEditEmployeeSubmit={onEditEmployeeSubmit}/>} />
                        {/* <Route path="/employees/:employeeId/delete" element={<DeleteEmployee />} /> */}
                        <Route path="/employees/:employeeId/tasks" element={<EmployeeTasks />} />

                        <Route path="/tasks" element={<Tasks tasks={tasks} />} />
                        <Route path="/tasks/create" element={<CreateTask onTaskCreateSubmit={onTaskCreateSubmit}/>} />
                        <Route path="/tasks/:taskId/edit" element={<EditTask onTaskEditSubmit={onTaskEditSubmit}/>} />
                        {/* <Route path="/tasks/:taskId/delete" element={<DeleteTask />} /> */}
                        <Route path="/tasks/:taskId/assign" element={<AssignTask employees={employees} onAssignTaskSubmit={onAssignTaskSubmit}/>} />

                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </main>
            <Footer /> 
        </div>
        </authContext.Provider>
    );
}

export default App;
