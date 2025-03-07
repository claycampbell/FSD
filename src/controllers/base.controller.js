class BaseController {
    constructor() {
        if (this.constructor === BaseController) {
            throw new Error('Cannot instantiate abstract BaseController');
        }
    }

    /**
     * Success response helper
     * @param {*} data Response data
     * @param {string} message Success message
     * @param {number} status HTTP status code
     * @returns {Object} Response object
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
     * Error response helper
     * @param {string} message Error message
     * @param {number} status HTTP status code
     * @param {*} error Error details
     * @returns {Object} Response object
     */
    error(message = 'Error', status = 500, error = null) {
        return {
            success: false,
            message,
            error,
            status
        };
    }
}

module.exports = BaseController;