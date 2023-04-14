import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { authContext } from "./autContext";
import { employeeTasksServiceFactory } from "../services/employeeTasksService";

export const employeeTasksContext = createContext();

export const EmployeeTasksProvider = ({ children }) => {
  const navigate = useNavigate();
  const { token } = useContext(authContext);
  const [employeeTasks, setEmployeeTasks] = useState([]);
  const { employeeId } = useParams();

  const employeeTasksService = employeeTasksServiceFactory(token);

  useEffect(() => {
    employeeTasksService
      .getAllTasksByEmployee(employeeId)
      .then((result) => setEmployeeTasks(result));
  }, []);

  const onEmployeeTaskAssign = async (taskId) => {
    try {
      const newTask = await employeeTasksService.assign(taskId);

      setEmployeeTasks((state) => [...state, newTask]);

      navigate("/employees");
    } catch (error) {
      console.log("Error onEmployeeTasksAssign:" + error);
    }
  };

  const context = {
    employeeTasks,
    onEmployeeTaskAssign,
  };
  return (
    <employeeTasksContext.Provider value={context}>
      {children}
    </employeeTasksContext.Provider>
  );
};
