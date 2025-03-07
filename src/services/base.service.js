class BaseService {
    /**
     * Execute service operation with error handling and validation
     * @param {Function} operation Operation to execute
     * @param {Object} params Operation parameters
     * @param {Array} requiredParams Required parameter names
     * @returns {Promise} Operation result
     */
    async executeOperation(operation, params = {}, requiredParams = []) {
        try {
            // Validate required parameters
            this.validateParams(params, requiredParams);
            
            // Execute operation
            const result = await operation();
            return result;
        } catch (error) {
            throw this.wrapError(error);
        }
    }

    /**
     * Validate operation parameters
     * @param {Object} params Parameters to validate
     * @param {Array} required Required parameter names
     */
    validateParams(params, required) {
        for (const param of required) {
            if (!(param in params)) {
                throw new Error(`Missing required parameter: ${param}`);
            }

            if (params[param] === undefined || params[param] === null) {
                throw new Error(`Parameter ${param} cannot be null or undefined`);
            }
        }
    }

    /**
     * Wrap error with additional context
     * @param {Error} error Original error
     * @returns {Error} Wrapped error
     */
    wrapError(error) {
        // Add service context to error
        if (error.isOperational) {
            return error;
        }

        const wrappedError = new Error(error.message);
        wrappedError.originalError = error;
        wrappedError.isOperational = true;
        wrappedError.stack = error.stack;
        return wrappedError;
    }

    /**
     * Create success response
     * @param {*} data Response data
     * @param {string} message Success message
     * @returns {Object} Success response
     */
    success(data = null, message = 'Operation successful') {
        return {
            success: true,
            message,
            data
        };
    }

    /**
     * Create error response
     * @param {string} message Error message
     * @param {number} status HTTP status code
     * @param {Error} error Original error
     * @returns {Object} Error response
     */
    error(message = 'Operation failed', status = 500, error = null) {
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

module.exports = BaseService;