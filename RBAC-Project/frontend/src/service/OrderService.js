import instance from "../api/axios";

export const getOrders = () => instance.get('/orders');
export const createOrder = (data) => instance.post('/orders', data);
export const updateOrder = (id, data) => instance.put(`/orders/${id}`, data);
export const deleteOrder = (id) => instance.delete(`/orders/${id}`);
