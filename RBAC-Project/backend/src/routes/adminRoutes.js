

const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { authenticate } = require('../middleware/auth');   // ✅ destructure the function
const rbac = require('../middleware/rbac');

router.post('/role', authenticate, rbac(['manage_roles']), adminController.createRole);
router.post('/permission', authenticate, rbac(['manage_permissions']), adminController.createPermission);
router.post('/assign', authenticate, rbac(['manage_roles']), adminController.assignPermissionToRole);

module.exports = router;
