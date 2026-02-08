// src/pages/Dashboard.js
// import React from 'react';

// const Dashboard = () => {
//   return (
//     <div className="container mt-5">
//       <h2>User Dashboard</h2>
//       <p>Welcome! You’ll see tables and fields based on your role permissions.</p>
//       <div className="card mt-3">
//         <div className="card-body">
//           <h5 className="card-title">Employee Data</h5>
//           <p className="card-text">This section will dynamically render based on permissions.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



// import React, { useContext } from 'react';
// import { AuthContext } from '../context/AuthContext';
// import "../styles/global.css";

// const Dashboard = () => {
//   const { user } = useContext(AuthContext);

//   return (
//     <div className="dashboard">
//       <h2 className="dashboard-title">User Dashboard</h2>
//       <p className="dashboard-subtitle">
//         Welcome {user?.username || "Guest"}! Your dashboard adapts to your role permissions.
//       </p>

//       {/* Employee Data Section */}
//       {(user?.role === "admin" || user?.role === "manager") && (
//         <div className="dashboard-card">
//           <h3>Employee Data</h3>
//           <p>This section shows employee records. Only admins/managers can view.</p>
//           {/* Later: render employee table dynamically */}
//         </div>
//       )}

//       {/* Orders Section */}
//       {user?.role === "user" && (
//         <div className="dashboard-card">
//           <h3>My Orders</h3>
//           <p>This section shows your personal orders. Regular users can view their own data.</p>
//           {/* Later: render orders dynamically */}
//         </div>
//       )}

//       {/* Common Section */}
//       <div className="dashboard-card">
//         <h3>Profile</h3>
//         <p>Username: {user?.username}</p>
//         <p>Role: {user?.role}</p>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React from 'react';
import "../styles/global.css";

const Dashboard = () => {
  // const { user } = useContext(AuthContext);

  return (
    <div className="page-content user-dashboard-content">
  <h2>Role-Based Access Control System – User View</h2>
  <p>
    Welcome to the RBAC demo application. As a regular user, your access to data and actions
    is determined by the role assigned to you by the Admin. This ensures that sensitive
    information and operations are protected while still allowing you to perform your work.
  </p>

  <p>
    <strong>Backend Flow:</strong> The backend (Golang + MySQL) authenticates you with your
    username and password. Once logged in, the system checks your role and permissions
    before allowing any action. If you attempt something outside your role’s permissions,
    the backend rejects the request.
  </p>

  <p>
    <strong>Frontend Flow:</strong> The frontend adapts dynamically to your role. You will
    only see the tables and fields you are allowed to view. For example, if your role is
    “viewer,” you may see employee names and departments but not salaries. If your role is
    “editor,” you may also see and update certain fields. Buttons and forms are enabled or
    disabled based on your permissions.
  </p>

  <p>
    <strong>Database Connection:</strong> The application uses a MySQL database with sample
    tables like Employees, Projects, and Orders. Each table has multiple fields, and your
    role determines which fields you can view or edit. This demonstrates field-level
    security in practice.
  </p>

  <p>
    <strong>User Experience:</strong> From this dashboard, you can:
    <ul>
      <li>View the tables you have access to</li>
      <li>Interact with fields permitted by your role</li>
      <li>Perform edits only if your role allows it</li>
      <li>Understand how RBAC protects sensitive data</li>
    </ul>
  </p>

  <p>
    This dashboard shows how role-based permissions shape the user experience. It ensures
    that you only see and do what your role allows, while the backend enforces these rules
    strictly to maintain security and integrity.
  </p>
</div>
  );
};

export default Dashboard;
