import {requestFactory} from '../utils/requester';

const baseUrl = 'http://localhost:3030/data/employees';

export const employeeServiceFactory = (token) => {
    const request = requestFactory(token);

    const getAll = async () => {
        const result = await request.get(baseUrl);
        const employees = Object.values(result);
    
        return employees;
    };
    
    const getOne = async (employeeId) => {
        const result = await request.get(`${baseUrl}/${employeeId}`);
    
        return result;
    };
    
    const create = async (employeeData) => {
        const result = await request.post(baseUrl, employeeData);
    
        console.log(result);
    
        return result;
    };
    
    const remove = async(employeeId) => {
        const result = await request.remove(`${baseUrl}/${employeeId}`);
    
        return result;
    }

    return {
        getAll,
        getOne,
        create,
        delete: remove
    }
}


