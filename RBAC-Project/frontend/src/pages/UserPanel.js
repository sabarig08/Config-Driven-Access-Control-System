// src/pages/UserPanel.js

// const UserPanel = () => {
//   return (
//     <div className="container mt-5">
//       <h2>User Panel</h2>
//       <p>This page can show user-specific settings or profile info.</p>
//     </div>
//   );
// };

// export default UserPanel;

// import React from 'react';
// import "../styles/global.css";

// const UserPanel = () => {
//   return (
//     <div className="user-panel">
//       <h2 className="user-panel-title">User Panel</h2>
//       <p className="user-panel-subtitle">
//         Welcome to your dashboard. Manage your account and settings here.
//       </p>

//       <div className="user-panel-section">
//         <h3>Profile Information</h3>
//         <ul>
//           <li><strong>Username:</strong> johndoe</li>
//           <li><strong>Email:</strong> johndoe@example.com</li>
//           <li><strong>Role:</strong> User</li>
//         </ul>
//       </div>

//       <div className="user-panel-section">
//         <h3>Settings</h3>
//         <button className="btn-primary">Update Profile</button>
//         <button className="btn-secondary">Change Password</button>
//       </div>

//       <div className="user-panel-section">
//         <h3>Quick Actions</h3>
//         <button className="btn-primary">View Orders</button>
//         <button className="btn-secondary">Support</button>
//       </div>
//     </div>
//   );
// };

// export default UserPanel;

import React from 'react';
import "../styles/global.css";

const UserPanel = () => {
  return (
    <div className="user-panel">
      <h2>User Panel</h2>

      <div className="card">
        <h3>Profile</h3>
        <p>Manage your account</p>
      </div>

      <div className="card">
        <h3>Quick Actions</h3>
        <button className="btn-primary">View Orders</button>
      </div>
    </div>
  );
};

export default UserPanel;
