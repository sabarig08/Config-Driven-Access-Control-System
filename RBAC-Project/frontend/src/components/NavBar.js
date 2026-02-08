// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';
// import "../styles/global.css"

// const Navbar = () => {
//   const { user, setUser } = useContext(AuthContext);

//   const handleLogout = () => {
//     setUser(null);
//     localStorage.removeItem('user');
//   };

//   return (
// <nav className="navbar">
//   <div className="nav-container">
//     <Link className="brand" to="/">RBAC App</Link>

//     <ul className="nav-links">
//       {user && user.role === 'admin' && (
//         <li><Link className="nav-link" to="/admin">Admin Panel</Link></li>
//       )}

//       {user && user.role === 'user' && (
//         <li><Link className="nav-link" to="/dashboard">Dashboard</Link></li>
//       )}

//       {user ? (
//         <li>
//           <button className="logout-btn" onClick={handleLogout}>
//             Logout
//           </button>
//         </li>
//       ) : (
//         <li>
//           <Link className="nav-link" to="/register">Register</Link>
//         </li>
//       )}
//     </ul>
//   </div>
// </nav>


//   );
// };

// export default Navbar;


import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import "../styles/global.css";

const Navbar = () => {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token')
    navigate("/login")
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Brand */}
        <Link className="brand" to="/">
          RBAC App
        </Link>

        {/* Links */}
        <ul className="nav-links">
          {/* Admin */}
          {user?.role?.toLowerCase() === "admin" && (
            <li>
              <Link className="nav-link" to="/admin">
                Admin Panel
              </Link>
            </li>
          )}

          {/* User */}
          {user?.role?.toLowerCase() === "user" && (
            <li>
              <Link className="nav-link" to="/dashboard">
                Dashboard
              </Link>
            </li>
          )}

          {user && (
            <>
              <li><Link className="nav-link" to="/employee">Employees</Link></li>
              <li><Link className="nav-link" to="/order">Orders</Link></li>
            </>
          )}

          {/* Show username when logged in */}
          {user && (
            <li className="nav-username">
              <span>Welcome, {user.name}</span>
            </li>
          )}

          {/* Auth buttons */}
          {user ? (
            <li>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </li>
          ) : (
            <>
              <li>
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;