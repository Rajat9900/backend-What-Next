const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'ranjana@1234567s';

function verifyToken(req, res, next) {
  const token = req.header('Authorization')?.split(' ')[1]; 
  
  if (!token) {
    return res.status(401).json({ msg: 'Authorization failed, token missing' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (error) {
    res.status(401).json({ msg: 'Invalid token' });
  }
}

module.exports = verifyToken;
