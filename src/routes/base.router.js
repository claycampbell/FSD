class BaseRouter {
    constructor() {
        this.routes = {
            GET: new Map(),
            POST: new Map(),
            PUT: new Map(),
            DELETE: new Map()
        };
        this.middleware = [];
    }

    /**
     * Add middleware function to router
     * @param {Function} middleware Middleware function
     */
    use(middleware) {
        this.middleware.push(middleware);
    }

    /**
     * Register GET route
     * @param {string} path Route path
     * @param {Function} handler Route handler
     */
    get(path, handler) {
        this.routes.GET.set(path, handler);
    }

    /**
     * Register POST route
     * @param {string} path Route path
     * @param {Function} handler Route handler
     */
    post(path, handler) {
        this.routes.POST.set(path, handler);
    }

    /**
     * Register PUT route
     * @param {string} path Route path
     * @param {Function} handler Route handler
     */
    put(path, handler) {
        this.routes.PUT.set(path, handler);
    }

    /**
     * Register DELETE route
     * @param {string} path Route path
     * @param {Function} handler Route handler
     */
    delete(path, handler) {
        this.routes.DELETE.set(path, handler);
    }

    /**
     * Handle route matching and execution
     * @param {string} method HTTP method 
     * @param {string} path Request path
     * @param {Object} context Request context
     * @returns {Promise} Route handler result
     */
    async route(method, path, context) {
        const handler = this.routes[method].get(path);
        
        if (!handler) {
            return this.error('Route not found', 404);
        }

        try {
            // Run middleware chain
            for (const middleware of this.middleware) {
                await middleware(context, async () => {});
            }

            // Execute route handler
            return await handler(context);
        } catch (error) {
            return this.error(error.message, error.status || 500, error);
        }
    }

    /**
     * Create success response
     * @param {*} data Response data
     * @param {string} message Success message
     * @param {number} status HTTP status code
     * @returns {Object} Success response
     */
    success(data = null, message = 'Success', status = 200) {
        return {
            success: true,
            message,
            data,
            status
        };
    }

    /**
     * Create error response
     * @param {string} message Error message
     * @param {number} status HTTP status code
     * @param {Error} error Original error
     * @returns {Object} Error response
     */
    error(message = 'Error', status = 500, error = null) {
        return {
            success: false,
            message,
            status,
            error: error ? {
                name: error.name,
                message: error.message,
                stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
            } : undefined
        };
    }
}

module.exports = BaseRouter;