import jwt from 'jsonwebtoken';

const whiteList = ['/auth/login', '/auth/register']; // API bỏ qua xác thực

const authenticateToken = (req, res, next) => {
  // Nếu API nằm trong whitelist thì bỏ qua luôn
  if (whiteList.includes(req.path)) {
    return next();
  }

  // Lấy token từ header Authorization
  const token = req.headers['authorization']?.split(' ')[1]; // Bearer <token>

  if (!token) {
    return res.status(401).json({ message: 'Token is required' });
  }

  // Xác thực token
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid or expired token' });
    }
    req.user = user;
    console.log(" Token verified:", user);
    next(); 
  });
};

export default authenticateToken;
