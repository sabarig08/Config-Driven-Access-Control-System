import instance from "../api/axios";

export const createEmployee = (data) => instance.post('/employees', data);
export const updateEmployee = (id, data) => instance.put(`/employees/${id}`, data);
export const getEmployees = () => instance.get('/employees');
export const deleteEmployee = (id) => instance.delete(`/employees/${id}`);
