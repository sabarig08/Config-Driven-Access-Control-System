import instance from "../api/axios";

export const register = (data) => instance.post('/auth/register', data);
export const login = (data) => instance.post('/auth/login', data);
