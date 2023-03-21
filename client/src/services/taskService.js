import * as request from '../utils/requester';

const baseUrl = 'http://localhost:3030/jsonstore/tasks';

export const getAll = async () => {
    const result = await request.get(baseUrl);
    const tasks = Object.values(result);

    return tasks;
};

export const getOne = async (taskId) => {
    const result = await request.get(`${baseUrl}/${taskId}`);

    return result;
};

export const create = async (taskData) => {
    const result = await request.post(baseUrl, taskData);

    console.log(result);

    return result;
};

export const remove = async(taskId) => {
    const result = await request.remove(`${baseUrl}/${taskId}`);

    return result;
}
