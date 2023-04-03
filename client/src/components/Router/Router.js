import { Routes, Route } from "react-router-dom";
import DashBoard from '../Dashboard/Dashboard';
import CreateEmployee from '../Employees/CreateEmployee';
import EditEmployee from '../Employees/EditEmployee';
import Employees from '../Employees/Employees';
import EmployeeTasks from '../Employees/EmployeeTasks';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Logout from "../Logout/Logout";
import AssignTask from '../Tasks/AssignTask';
import CreateTask from '../Tasks/CreateTask';
import EditTask from '../Tasks/EditTask';
import Tasks from '../Tasks/Tasks';
import PageNotFound from '../PageNotFound/PageNotFound';

export const Router = () => {
    return(
        <>
        <Routes>
        <Route path="/" element={<DashBoard />} />

        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/logout" element={<Logout />} />

        <Route path="/employees" element={<Employees />} />
        <Route path="/employees/create" element={<CreateEmployee />} />
        <Route path="/employees/:employeeId/edit" element={<EditEmployee />} />
        {/* <Route path="/employees/:employeeId/delete" element={<DeleteEmployee />} /> */}
        <Route path="/employees/:employeeId/tasks" element={<EmployeeTasks />} />

        <Route path="/tasks" element={<Tasks />} />
        <Route path="/tasks/create" element={<CreateTask />} />
        <Route path="/tasks/:taskId/edit" element={<EditTask />} />
        {/* <Route path="/tasks/:taskId/delete" element={<DeleteTask />} /> */}
        <Route path="/tasks/:taskId/assign" element={<AssignTask />} />

        <Route path="*" element={<PageNotFound />} />
    </Routes>
    </>
    );
};