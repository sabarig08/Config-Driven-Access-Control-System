



const jwt = require('jsonwebtoken');

function authenticate(req, res, next) {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ error: 'No token provided' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    req.user = decoded; // { id, role }
    next();
  } catch (err) {
    res.status(401).json({ error: 'Unauthorized' });
  }
}

function authorizeRole(requiredRole) {
  return (req, res, next) => {
    if (req.user.role !== requiredRole) {
      return res.status(403).json({ error: 'Forbidden: insufficient role' });
    }
    next();
  };
}

module.exports = { authenticate, authorizeRole };
