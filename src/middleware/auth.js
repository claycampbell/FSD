const jwt = require('jsonwebtoken');
const { UnauthorizedError } = require('./error-handler');

/**
 * Middleware to authenticate requests using JWT
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
function authenticateToken(req, res, next) {
    try {
        const authHeader = req.headers.authorization;
        
        if (!authHeader) {
            throw new UnauthorizedError('No token provided');
        }

        // Check if authorization header has the correct format
        if (!authHeader.startsWith('Bearer ')) {
            throw new UnauthorizedError('Invalid token format');
        }

        // Extract token from header
        const token = authHeader.split(' ')[1];

        if (!token) {
            throw new UnauthorizedError('No token provided');
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        // Add user information to request object
        req.user = decoded;
        
        next();
    } catch (error) {
        if (error.name === 'JsonWebTokenError') {
            next(new UnauthorizedError('Invalid token'));
        } else if (error.name === 'TokenExpiredError') {
            next(new UnauthorizedError('Token expired'));
        } else {
            next(error);
        }
    }
}

/**
 * Middleware to check if user has required role
 * @param {string[]} roles - Array of allowed roles
 */
function authorizeRoles(...roles) {
    return (req, res, next) => {
        if (!req.user) {
            return next(new UnauthorizedError('Authentication required'));
        }

        if (!roles.includes(req.user.role)) {
            return next(new UnauthorizedError('Insufficient permissions'));
        }

        next();
    };
}

module.exports = {
    authenticateToken,
    authorizeRoles
};