const { userSchemas, paginationSchema, validate } = require('../config/validation-schemas');
const { errorHandler, NotFoundError } = require('../middleware/error-handler');

/**
 * Controller for user-related operations
 */
class UserController {
    constructor(userService) {
        this.userService = userService;
    }

    /**
     * Get all users with pagination
     */
    async getUsers(req, res, next) {
        try {
            const query = validate(paginationSchema, req.query);
            const users = await this.userService.findAll(query);
            res.json({
                success: true,
                data: users
            });
        } catch (error) {
            next(error);
        }
    }

    /**
     * Get user by ID
     */
    async getUserById(req, res, next) {
        try {
            const { id } = validate(userSchemas.idParam, req.params);
            const user = await this.userService.findById(id);
            
            if (!user) {
                throw new NotFoundError('User not found');
            }

            res.json({
                success: true,
                data: user
            });
        } catch (error) {
            next(error);
        }
    }

    /**
     * Create new user
     */
    async createUser(req, res, next) {
        try {
            const userData = validate(userSchemas.create, req.body);
            const user = await this.userService.create(userData);
            
            res.status(201).json({
                success: true,
                data: user,
                message: 'User created successfully'
            });
        } catch (error) {
            next(error);
        }
    }

    /**
     * Update existing user
     */
    async updateUser(req, res, next) {
        try {
            const { id } = validate(userSchemas.idParam, req.params);
            const updates = validate(userSchemas.update, req.body);
            
            const user = await this.userService.findById(id);
            if (!user) {
                throw new NotFoundError('User not found');
            }

            const updatedUser = await this.userService.update(id, updates);
            
            res.json({
                success: true,
                data: updatedUser,
                message: 'User updated successfully'
            });
        } catch (error) {
            next(error);
        }
    }

    /**
     * Delete user
     */
    async deleteUser(req, res, next) {
        try {
            const { id } = validate(userSchemas.idParam, req.params);
            
            const user = await this.userService.findById(id);
            if (!user) {
                throw new NotFoundError('User not found');
            }

            await this.userService.delete(id);
            
            res.json({
                success: true,
                message: 'User deleted successfully'
            });
        } catch (error) {
            next(error);
        }
    }
}

// Export singleton instance
module.exports = UserController;