import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./contexts/autContext";
import { EmployeeProvider } from "./contexts/employeeContext";
import { TaskProvider } from "./contexts/taskContext";

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
    return (
        <AuthProvider >
            <div className="App">
                <Header />
                <Navbar />
                <main className="main">
                    <EmployeeProvider>
                        <TaskProvider>
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
                        </TaskProvider>
                    </EmployeeProvider>
                </main>
                <Footer />
            </div>
        </AuthProvider>
    );
}

export default App;
