import React from 'react';
import "../styles/global.css";

const AdminPanel = () => {
  return (
    <div className="page-content admin-panel-content">
  <h2>Role-Based Access Control System – Admin View</h2>
  <p>
    This application demonstrates a full-stack RBAC (Role-Based Access Control) system.
    As an Admin, you are responsible for creating roles, defining permissions, and managing
    access to different tables and fields in the database. Permissions are not hardcoded;
    they are stored dynamically in configuration (JSON/DB) and enforced both in the backend
    and frontend.
  </p>

  <p>
    <strong>Backend Flow:</strong> The backend is built with Golang, connected to a MySQL
    database. Authentication is handled via username and password. Once logged in, Admins
    can create roles (e.g., viewer, editor, manager) and assign table-level and field-level
    permissions. These permissions are stored in the database and checked whenever a user
    attempts an action. Unauthorized requests are rejected by the backend.
  </p>

  <p>
    <strong>Frontend Flow:</strong> The frontend (React) dynamically adapts based on the
    logged-in user’s role. Tables and fields are conditionally rendered: if a role does not
    have view permission, the field is hidden; if it does not have edit permission, the
    edit buttons are disabled. This ensures the UI reflects backend rules consistently.
  </p>

  <p>
    <strong>Database Connection:</strong> The MySQL database contains sample tables such as
    Employees, Projects, and Orders. Each table has multiple fields (e.g., Employees: id,
    name, department, salary). Permissions are defined per table and per field, allowing
    fine-grained control. For example, a “viewer” role may only see employee names and
    departments, while an “editor” role can also update salaries.
  </p>

  <p>
    <strong>Admin Responsibilities:</strong> From this panel, you can:
    <ul>
      <li>Create and manage roles</li>
      <li>Assign table-level and field-level permissions</li>
      <li>Manage users and their assigned roles</li>
      <li>Monitor system activity and enforce security</li>
    </ul>
  </p>

  <p>
    This AdminPanel is the control center of the RBAC system. It ensures that access
    policies are centrally defined and consistently enforced across the application.
  </p>
</div>
  );
};

export default AdminPanel;