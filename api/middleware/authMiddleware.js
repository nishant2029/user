const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    // Get the token from the Authorization header
    const token = req.header('Authorization');

    // If no token, deny access
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    try {
        // Verify token (remove 'Bearer ' from the token string)
        const decoded = jwt.verify(token.split(' ')[1], 'secretkey'); // Make sure to use your JWT secret key here
        req.user = decoded.id; // Extract the user ID from the decoded token
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
};

module.exports = authMiddleware;
