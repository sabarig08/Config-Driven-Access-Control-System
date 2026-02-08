import React, { useState, useEffect, useContext } from 'react';
import { getOrders, createOrder, updateOrder, deleteOrder } from '../service/OrderService';
import { AuthContext } from '../context/AuthContext';
import "../styles/global.css"


function OrderPage() {

    const [orders, setOrders] = useState([])
    const [form, setForm] = useState({ product: '', quantity: '', price: '', customer: '' })
    const [editId, setEditId] = useState(null)
    const { user } = useContext(AuthContext)


    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const res = await getOrders()
                setOrders(res.data)
            }
            catch (err) {
                alert(err.response?.data?.error || 'Failed to load Orders')
            }
        }
        fetchOrders()
    }, [])


    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editId) {
                await updateOrder(editId, form);
                alert('order updated');
            } else {
                await createOrder(form);
                alert('Order created');
            }
            setForm({ product: '', quantity: '', price: '', customer: '' });
            setEditId(null);
            const res = await getOrders()
            setOrders(res.data)
        }
        catch (err) {
            alert(err.response?.data?.error || 'Error saving Order')

        }
    }

    const handleEdit = (ord) => {
        setForm({ product: ord.product, quantity: ord.quantity, price: ord.price, customer: ord.customer });
        setEditId(ord.id);
    }

    const handleDelete = async (ordId) => {
        await deleteOrder(ordId)
        alert('Order deleted');
        const res = await getOrders();
        setOrders(res.data);
    }

    return (
        <div className="container mt-5">
            <h2>Orders Management</h2>
            {user?.role.toLowerCase() === 'admin' && (
                <form onSubmit={handleSubmit} className="mb-4">
                    <input name="product" value={form.product} onChange={handleChange} placeholder="Product" required />
                    <input name="quantity" type="number" value={form.quantity} onChange={handleChange} placeholder="Quantity" required />
                    <input name="price" type="number" value={form.price} onChange={handleChange} placeholder="Price" required />
                    <input name="customer" value={form.customer} onChange={handleChange} placeholder="Customer" required />
                    <button type="submit">{editId ? 'Update Order' : 'Create Order'}</button>
                </form>
            )}


            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th><th>Product</th><th>Quantity</th><th>Price</th><th>Customer</th><th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, idx) => (
                        <tr key={order.id}>
                            <td>{idx + 1}</td>
                            <td>{order.product}</td>
                            <td>{order.quantity}</td>
                            <td>{order.price}</td>
                            <td>{order.customer}</td>
                            <td>
                                {user?.role.toLowerCase() === 'admin' ? (
                                    <>
                                        <button onClick={() => handleEdit(order)}>Edit</button>
                                        <button onClick={() => handleDelete(order.id)}>Delete</button>
                                    </>
                                ) : (
                                    <span>View only</span>
                                )}

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}


export default OrderPage;