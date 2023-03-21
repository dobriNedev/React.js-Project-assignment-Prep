import * as request from '../utils/requester';

const baseUrl = 'http://localhost:3030/users';

export const register = (data) => request.post(`${baseUrl}/register`, data)
export const login = (data) => request.post(`${baseUrl}/login`, data);
export const logout = (token) => request.get(`${baseUrl}/logout`, token);