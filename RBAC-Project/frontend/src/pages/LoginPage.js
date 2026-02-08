// import React, { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import LoginForm from '../components/LoginForm';
// import { AuthContext } from '../context/AuthContext';
// import api from '../api/axios';

// const LoginPage = () => {
//   const { setUser } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleLogin = async ({ username, password }) => {
//     try {
//       const res = await api.post('/auth/login', { username, password });
//       setUser(res.data.user);
//      console.log(username,password)
//       if (res.data.user.role === 'admin') {
//         navigate('/admin');
//       } else {
//         navigate('/dashboard');
//       }
//     } catch (err) {
//       alert('Invalid');
//       console.error(err)
//     }
//   };


//   return <LoginForm onLogin={handleLogin} />;
// };

// export default LoginPage;



// import React, { useContext, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import LoginForm from '../components/LoginForm';
// import { AuthContext } from '../context/AuthContext';
// import api from '../api/axios';
// import "../styles/global.css";

// const LoginPage = () => {
//   const { setUser } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleLogin = async ({ username, password }) => {
//     setLoading(true);
//     setError("");
//     try {
//       const res = await api.post('/auth/login', { username, password });
//       setUser(res.data.user);

//       if (res.data.user.role === 'admin') {
//         navigate('/admin');
//       } else {
//         navigate('/dashboard');
//       }
//     } catch (err) {
//       setError("Invalid username or password. Please try again.");
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="login-page">
//       <h2 className="login-title">Sign In</h2>
//       {error && <p className="error-message">{error}</p>}
//       {loading ? (
//         <p className="loading-message">Logging in...</p>
//       ) : (
//         <LoginForm onLogin={handleLogin} />
//       )}
//     </div>
//   );
// };

// export default LoginPage;

// import React, { useContext } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import LoginForm from '../components/LoginForm';
// import { AuthContext } from '../context/AuthContext';
// import api from '../api/axios';
// import "../styles/global.css";

// const LoginPage = () => {
//   const { setUser } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleLogin = async ({ username, password }) => {
//     try {
//       const res = await api.post('/auth/login', { username, password });
//       setUser(res.data.user);

//       if (res.data.user.role === 'admin') {
//         navigate('/admin');
//       } else {
//         navigate('/dashboard');
//       }
//     } catch (err) {
//       alert('Invalid');
//       console.error(err);
//     }
//   };

//   return (
//     <div className="login-page">
//       <h2 className="login-title">Sign In</h2>
//       <LoginForm onLogin={handleLogin} />
//       <p className="signup-link">
//         Don’t have an account? <Link to="/signup">Sign Up</Link>
//       </p>
//     </div>
//   );
// };

// export default LoginPage;

import React, { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import { AuthContext } from '../context/AuthContext';
import api from '../api/axios';
import "../styles/global.css";

const LoginPage = () => {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async ({ username, password }) => {
    try {
      const res = await api.post('/auth/login', { username, password });
      setUser(res.data.user);

      res.data.user.role === 'admin'
        ? navigate('/admin')
        : navigate('/dashboard');
    } catch {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <LoginForm onLogin={handleLogin} />
      <p>
        Don’t have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default LoginPage;
