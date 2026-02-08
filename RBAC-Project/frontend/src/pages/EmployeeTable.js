import React, { useState, useEffect, useContext } from 'react';
import { getEmployees, createEmployee, updateEmployee, deleteEmployee } from '../service/EmployeeService';
// import { getEmployees, createEmployee, updateEmployee, deleteEmployee } from '../api/employeeService';
import { AuthContext } from '../context/AuthContext';
import '../styles/global.css';


function EmployeePage() {

    const [employees, setEmployees] = useState([])
    const [form, setForm] = useState({ name: '', department: '', salary: '' })
    const [editId, setEditId] = useState(null)
    const { user } = useContext(AuthContext)

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const res = await getEmployees()
                setEmployees(res.data)
            }
            catch (err) {
                alert(err.response?.data?.error || 'Failed to load employees')
            }
        }
        fetchEmployees()
    }, [])

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editId) {
                await updateEmployee(editId, form);
                alert('Employee updated');
            } else {
                await createEmployee(form);
                alert('Employee created');
            }
            setForm({ name: '', department: '', salary: '' });
            setEditId(null);

            const res = await getEmployees()
            setEmployees(res.data)
        }
        catch (err) {
            alert(err.response?.data?.error || 'Error saving employee');
        }
    }

    const handleEdit = (emp) => {
        setForm({ name: emp.name, department: emp.department, salary: emp.salary });
        setEditId(emp.id);
    }

    const handleDelete = async (empId) => {
        await deleteEmployee(empId)
        alert('Employee deleted');
        const res = await getEmployees();
        setEmployees(res.data);
    }


    return (
        <div className="container mt-5">
            <h2>Employees Management</h2>
            {user?.role.toLowerCase() === 'admin' && (
                <form onSubmit={handleSubmit} className="mb-4">
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
                    <input name="department" value={form.department} onChange={handleChange} placeholder="Department" required />
                    <input name="salary" type="number" value={form.salary} onChange={handleChange} placeholder="Salary" required />
                    <button type="submit">{editId ? 'Update Employee' : 'Create Employee'}</button>
                </form>
            )}

            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th><th>Name</th><th>Department</th><th>Salary</th><th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((emp, idx) => (
                        <tr key={emp.id}>
                            <td>{idx + 1}</td>
                            <td>{emp.name}</td>
                            <td>{emp.department}</td>
                            <td>{emp.salary}</td>
                            <td>
                                {user?.role.toLowerCase() === 'admin' ? (
                                    <>
                                        <button onClick={() => handleEdit(emp)}>Edit</button>
                                        <button onClick={() => handleDelete(emp.id)}>Delete</button>
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


export default EmployeePage;