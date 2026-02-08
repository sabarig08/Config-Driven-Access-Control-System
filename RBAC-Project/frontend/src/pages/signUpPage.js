// import React, { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import SignupForm from '../components/SignupForm';
// import { AuthContext } from '../context/AuthContext';
// import api from '../api/axios';
// import "../styles/global.css";

// const SignUpPage = () => {
//   const { setUser } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleSignup = async ({ username, password, role }) => {
//     try {
//       const res = await api.post('/auth/signup', { username, password, role });
//       setUser(res.data.user);

//       if (res.data.user.role === 'admin') {
//         navigate('/admin');
//       } else {
//         navigate('/dashboard');
//       }
//     } catch (err) {
//       alert('Signup failed');
//       console.error(err);
//     }
//   };

//   return (
//     <div className="signup-page">
//       <h2 className="signup-title">Create Account</h2>
//       <SignupForm onSignup={handleSignup} />
//     </div>
//   );
// };

// export default SignUpPage;


import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import SignupForm from '../components/SignUpForm';
import { AuthContext } from '../context/AuthContext';
import api from '../api/axios';
import "../styles/global.css";

const SignUpPage = () => {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignup = async (data) => {
    try {
      const res = await api.post('/auth/signup', data);
      setUser(res.data.user);

      res.data.user.role === 'admin'
        ? navigate('/admin')
        : navigate('/dashboard');
    } catch {
      alert('Signup failed');
    }
  };

  return (
    <div className="signup-page">
      <h2>Create Account</h2>
      <SignupForm onSignup={handleSignup} />
    </div>
  );
};

export default SignUpPage;
