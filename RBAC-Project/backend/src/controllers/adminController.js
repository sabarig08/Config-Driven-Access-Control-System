

const db = require('../config/db');

// Create a new role
async function createRole(req, res) {
  const { name } = req.body;
  try {
    const [result] = await db.query(
      'INSERT INTO rbac.roles (name) VALUES (?)',
      [name]
    );
    res.status(201).json({ message: 'Role created', id: result.insertId });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

// Create a new permission
async function createPermission(req, res) {
  const { name } = req.body;
  try {
    const [result] = await db.query(
      'INSERT INTO rbac.permissions (name) VALUES (?)',
      [name]
    );
    res.status(201).json({ message: 'Permission created', id: result.insertId });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

// Assign a permission to a role
async function assignPermissionToRole(req, res) {
  const { roleId, permissionId } = req.body;
  try {
    await db.query(
      'INSERT INTO rbac.role_permissions (role_id, permission_id) VALUES (?, ?)',
      [roleId, permissionId]
    );
    res.json({ message: 'Permission assigned successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

module.exports = { createRole, createPermission, assignPermissionToRole };