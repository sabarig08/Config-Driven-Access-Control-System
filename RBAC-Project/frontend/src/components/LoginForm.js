import React, { useContext, useState } from 'react';
import { login } from '../service/AuthService';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const LoginForm = ({ onLogin }) => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(AuthContext)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password })
    localStorage.setItem('token', res.data.token)
    localStorage.setItem('user', JSON.stringify(res.data.user));
    setUser(res.data.user)
    alert('Login Successful')
    if (res.data.user.role.toLowerCase() === 'user'){
      navigate('/dashboard');
    }
    else if (res.data.user.role.toLowerCase() === 'admin') {
      navigate('/admin')
    }
    }
    catch (err) {
      alert(err.response?.data?.error || 'Login failed' )
    }
  };

  return (
    <div className="container mt-5">
      {/* <h2 className="text-center mb-4">Login</h2> */}
        
      <form onSubmit={handleSubmit} className="col-md-6 offset-md-3">
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
