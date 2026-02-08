import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ children, role }) => {
  const { user } = useContext(AuthContext);

  if (!user) return <Navigate to="/login" />;

  // if (role && user.role.toLowerCase() !== role.toLowerCase()) {
  //   return <Navigate to="/not-authorized" />;
  // }
  if (role) {
    const allowedRoles = Array.isArray(role) ? role : [role];
    if (!allowedRoles.includes(user.role.toLowerCase())) {
      return <Navigate to="/not-authorized" />;
    }
  }

  return children;
};

export default ProtectedRoute;
