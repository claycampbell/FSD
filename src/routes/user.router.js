const BaseRouter = require('./base.router');

class UserRouter extends BaseRouter {
    constructor(userService) {
        super();
        this.userService = userService;
        this.registerRoutes();
    }

    /**
     * Register user routes
     */
    registerRoutes() {
        // List all users
        this.get('/users', async (context) => {
            try {
                const users = await this.userService.list();
                return this.success(users);
            } catch (error) {
                return this.error(error.message);
            }
        });

        // Get user by ID
        this.get('/users/:id', async (context) => {
            try {
                const user = await this.userService.get(context.params.id);
                if (!user) {
                    return this.error('User not found', 404);
                }
                return this.success(user);
            } catch (error) {
                return this.error(error.message);
            }
        });

        // Create new user
        this.post('/users', async (context) => {
            try {
                // Validate input data using model
                const validationResult = await this.userService.validateUser(context.body);
                if (validationResult.error) {
                    return this.error(validationResult.error, 400);
                }

                // Create user
                const user = await this.userService.create(context.body);
                return this.success(user, 'User created successfully', 201);
            } catch (error) {
                return this.error(error.message);
            }
        });

        // Update user
        this.put('/users/:id', async (context) => {
            try {
                // Check if user exists
                const existing = await this.userService.get(context.params.id);
                if (!existing) {
                    return this.error('User not found', 404);
                }

                // Validate update data
                const validationResult = await this.userService.validateUser({
                    ...existing,
                    ...context.body
                });
                if (validationResult.error) {
                    return this.error(validationResult.error, 400);
                }

                // Update user
                const updated = await this.userService.update(context.params.id, context.body);
                return this.success(updated, 'User updated successfully');
            } catch (error) {
                return this.error(error.message);
            }
        });

        // Delete user
        this.delete('/users/:id', async (context) => {
            try {
                const result = await this.userService.delete(context.params.id);
                if (!result) {
                    return this.error('User not found', 404);
                }
                return this.success(null, 'User deleted successfully');
            } catch (error) {
                return this.error(error.message);
            }
        });
    }
}

module.exports = UserRouter;