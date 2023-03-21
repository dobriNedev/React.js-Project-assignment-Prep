import * as request from '../utils/requester';

const baseUrl = 'http://localhost:3030/jsonstore/employees';

export const getAll = async () => {
    const result = await request.get(baseUrl);
    const employees = Object.values(result);

    return employees;
};

export const getOne = async (employeeId) => {
    const result = await request.get(`${baseUrl}/${employeeId}`);

    return result;
};

export const create = async (employeeData) => {
    const result = await request.post(baseUrl, employeeData);

    console.log(result);

    return result;
};

export const remove = async(employeeId) => {
    const result = await request.remove(`${baseUrl}/${employeeId}`);

    return result;
}
