// import React, { useContext } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LoginPage from '../pages/LoginPage';
// import Dashboard from '../pages/Dashboard';
// import AdminPanel from '../pages/AdminPanel';
// import UserPanel from '../pages/UserPanel';
// import NotAuthorized from '../pages/NotAuthorized';
// import Navbar from '../components/NavBar';
// import ProtectedRoute from '../components/ProtectedRoute';
// import { AuthContext } from '../context/AuthContext';

// const AppRouter = () => {
//   const { user } = useContext(AuthContext);

//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<LoginPage />} />
//         <Route path="/dashboard" element={
//           <ProtectedRoute role="user">
//             <Dashboard />
//           </ProtectedRoute>
//         } />
//         <Route path="/admin" element={
//           <ProtectedRoute role="admin">
//             <AdminPanel />
//           </ProtectedRoute>
//         } />
//         <Route path="/user" element={
//           <ProtectedRoute role="user">
//             <UserPanel />
//           </ProtectedRoute>
//         } />
//         <Route path="/not-authorized" element={<NotAuthorized />} />
//       </Routes>
//     </Router>
//   );
// };

// export default AppRouter;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/signUpPage';
import Dashboard from '../pages/Dashboard';
import AdminPanel from '../pages/AdminPanel';
import UserPanel from '../pages/UserPanel';
import NotAuthorized from '../pages/NotAuthorized';
import EmployeePage from '../pages/EmployeeTable';
import OrderPage from '../pages/OrderTable';

import Navbar from '../components/NavBar';
import ProtectedRoute from '../components/ProtectedRoute';

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Public */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignUpPage />} />

        {/* Protected */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute role="user">
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute role="admin">
              <AdminPanel />
            </ProtectedRoute>
          }
        />

        <Route
          path="/user"
          element={
            <ProtectedRoute role="user">
              <UserPanel />
            </ProtectedRoute>
          }
        />

        <Route path='/employee' element = { <ProtectedRoute role={['admin', 'user']}><EmployeePage /></ProtectedRoute> } />
        <Route path='/order' element = { <ProtectedRoute role={['admin', 'user']}><OrderPage /></ProtectedRoute> } />

        {/* Fallback */}
        <Route path="/not-authorized" element={<NotAuthorized />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
