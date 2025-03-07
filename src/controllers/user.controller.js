const UserService = require('../services/user.service');
const UserRouter = require('../routes/user.router');
const UserModel = require('../models/user.model');

class UserController {
    constructor() {
        this.userService = new UserService(UserModel);
        this.router = new UserRouter(this.userService);
    }

    /**
     * Initialize routes and middleware
     * @param {Object} app Express application instance
     * @param {string} prefix Route prefix
     */
    init(app, prefix = '/api') {
        // Add authentication middleware
        this.router.use(this.authenticate.bind(this));

        // Add validation middleware for user creation and updates
        this.router.use('/users', this.validateUser.bind(this));

        // Register routes
        app.use(prefix, this.router);
    }

    /**
     * Authentication middleware
     * @param {Object} context Request context
     * @param {Function} next Next middleware function
     */
    async authenticate(context, next) {
        const authHeader = context.headers.authorization;

        if (!authHeader) {
            throw new Error('No authorization header');
        }

        try {
            // Verify authentication token
            const token = authHeader.split(' ')[1];
            context.user = await this.verifyToken(token);
            await next();
        } catch (error) {
            throw new Error('Authentication failed');
        }
    }

    /**
     * User validation middleware
     * @param {Object} context Request context
     * @param {Function} next Next middleware function
     */
    async validateUser(context, next) {
        if (context.method === 'POST' || context.method === 'PUT') {
            const userData = context.body;

            try {
                // Validate user data using model
                const model = new UserModel(userData);
                context.validatedData = model.getData();
                await next();
            } catch (error) {
                throw new Error(`Validation error: ${error.message}`);
            }
        } else {
            await next();
        }
    }

    /**
     * Verify authentication token
     * @param {string} token Authentication token
     * @returns {Promise<Object>} Decoded user information
     */
    async verifyToken(token) {
        // Token verification logic would go here
        // This is a placeholder for actual JWT verification
        if (!token) {
            throw new Error('Invalid token');
        }

        return {
            id: 'user-id',
            role: 'user'
        };
    }

    /**
     * Get controller routes
     * @returns {Object} Router instance
     */
    getRouter() {
        return this.router;
    }
}

module.exports = UserController;