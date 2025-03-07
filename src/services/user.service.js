const BaseService = require('./base.service');

class UserService extends BaseService {
    constructor(UserModel) {
        super();
        this.UserModel = UserModel;
        this.users = new Map(); // In-memory store for demo
    }

    /**
     * List all users
     * @returns {Promise<Array>} List of users
     */
    async list() {
        return await this.executeOperation(
            async () => {
                const users = Array.from(this.users.values())
                    .map(user => new this.UserModel(user).toPublic());
                return users;
            }
        );
    }

    /**
     * Get user by ID
     * @param {string} id User ID
     * @returns {Promise<Object>} User data
     */
    async get(id) {
        return await this.executeOperation(
            async () => {
                const user = this.users.get(id);
                if (!user) return null;
                return new this.UserModel(user).toPublic();
            },
            { id },
            ['id']
        );
    }

    /**
     * Create new user
     * @param {Object} data User data
     * @returns {Promise<Object>} Created user
     */
    async create(data) {
        return await this.executeOperation(
            async () => {
                // Validate user data
                const user = new this.UserModel(data);
                const id = Date.now().toString(); // Simple ID generation
                
                // Store user
                this.users.set(id, {
                    ...user.getData(),
                    id
                });

                return user.toPublic();
            },
            { data },
            ['data']
        );
    }

    /**
     * Update existing user
     * @param {string} id User ID
     * @param {Object} data Update data
     * @returns {Promise<Object>} Updated user
     */
    async update(id, data) {
        return await this.executeOperation(
            async () => {
                const existing = this.users.get(id);
                if (!existing) return null;

                // Update user data
                const updated = new this.UserModel({
                    ...existing,
                    ...data
                });

                this.users.set(id, updated.getData());
                return updated.toPublic();
            },
            { id, data },
            ['id', 'data']
        );
    }

    /**
     * Delete user
     * @param {string} id User ID
     * @returns {Promise<boolean>} Deletion success
     */
    async delete(id) {
        return await this.executeOperation(
            async () => {
                if (!this.users.has(id)) return false;
                return this.users.delete(id);
            },
            { id },
            ['id']
        );
    }

    /**
     * Validate user data
     * @param {Object} data User data
     * @returns {Promise<Object>} Validation result
     */
    async validateUser(data) {
        return await this.executeOperation(
            async () => {
                const model = new this.UserModel(data);
                return {
                    value: model.getData()
                };
            },
            { data },
            ['data']
        );
    }
}

module.exports = UserService;