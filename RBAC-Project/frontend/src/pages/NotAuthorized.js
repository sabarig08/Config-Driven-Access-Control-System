// src/pages/NotAuthorized.js

// const NotAuthorized = () => {
//   return (
//     <div className="container mt-5 text-center">
//       <h2 className="text-danger">Access Denied</h2>
//       <p>You don’t have permission to view this page.</p>
//     </div>
//   );
// };

// export default NotAuthorized;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import "../styles/global.css";

// const NotAuthorized = () => {
//   return (
//     <div className="not-authorized">
//       <h2 className="not-authorized-title">🚫 Access Denied</h2>
//       <p className="not-authorized-text">
//         You don’t have permission to view this page. 
//         Please make sure you are signed in with the correct account.
//       </p>
//       <div className="not-authorized-actions">
//         <Link to="/signin" className="btn-primary">Sign In</Link>
//         <Link to="/register" className="btn-secondary">Register</Link>
//         <Link to="/" className="btn-link">Go Home</Link>
//       </div>
//     </div>
//   );
// };

// export default NotAuthorized;


import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/global.css";

const NotAuthorized = () => {
  return (
    <div className="not-authorized">
      <h2 className="not-authorized-title">🚫 Access Restricted</h2>

      <p className="not-authorized-text">
        You tried to open a page that your account is not allowed to access.
        This usually happens when:
      </p>

      <ul className="not-authorized-list">
        <li>You are not logged in</li>
        <li>Your role does not have permission</li>
        <li>You tried to access an admin-only page</li>
      </ul>

      <p className="not-authorized-text">
        Please log in with the correct account or contact the administrator
        if you believe this is a mistake.
      </p>

      <div className="not-authorized-actions">
        <Link to="/" className="btn-primary">Login</Link>
        <Link to="/register" className="btn-secondary">Register</Link>
      </div>
    </div>
  );
};

export default NotAuthorized;
