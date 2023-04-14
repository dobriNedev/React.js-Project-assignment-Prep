import { requestFactory } from "../utils/requester";

const baseUrl = "http://localhost:3030/data/employeeTasks";

export const employeeTasksServiceFactory = (token) => {
  const request = requestFactory(token);

  const getAllTasksByEmployee = async (employeeId) => {
    const result = await request.get(`${baseUrl}/${employeeId}`);
    //const employees = Object.values(result);

    //return employees;
    return result;
  };

  const getOne = async (employeeId) => {
    const result = await request.get(`${baseUrl}/${employeeId}`);

    return result;
  };

  const assign = async (taskId) => {
    const result = await request.post(baseUrl, taskId);

    console.log(result);

    return result;
  };

  const edit = async (employeeId, data) => {
    const result = await request.put(`${baseUrl}/${employeeId}`, data);

    return result;
  };

  const remove = async (employeeId) => {
    const result = await request.delete(`${baseUrl}/${employeeId}`);

    return result;
  };

  return {
    getAllTasksByEmployee,
    getOne,
    assign,
    edit,
    delete: remove,
  };
};
