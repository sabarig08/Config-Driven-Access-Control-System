import React, { useState, useContext } from 'react';
import "../styles/global.css"
import { useNavigate } from 'react-router-dom';
import { register } from '../service/AuthService';
import { AuthContext } from '../context/AuthContext';

const SignupForm = ({ onSignup }) => {

  const navigate=useNavigate()
  const [name,setName]=useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const { setUser } = useContext(AuthContext)

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const res = await register({ name, email, password, role_name: role})
      localStorage.setItem('token', res.data.token)
    localStorage.setItem('user', JSON.stringify(res.data.user));
    setUser(res.data.user)
    alert('Register Successfully')
    navigate('/dashboard')
    }
    catch (err) {
      alert(err.response?.data?.error || 'Register failed' )
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      
        <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />


      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="User">User</option>
        <option value="Admin">Admin</option>
      </select>

      <button type="submit">Register</button>
      
    </form>
  );
};

export default SignupForm;
