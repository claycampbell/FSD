class UserModel {
    constructor(data = {}) {
        // Define required fields and their validation rules
        this.requiredFields = {
            firstName: {
                type: 'string',
                minLength: 2,
                maxLength: 50
            },
            lastName: {
                type: 'string',
                minLength: 2,
                maxLength: 50
            },
            email: {
                type: 'string',
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            },
            role: {
                type: 'string',
                enum: ['user', 'admin']
            }
        };

        // Initialize data
        this.data = this.validate(data);
    }

    /**
     * Validate data against schema
     * @param {Object} data Data to validate
     * @returns {Object} Validated data
     */
    validate(data) {
        const validated = {};
        const errors = [];

        // Check required fields
        for (const [field, rules] of Object.entries(this.requiredFields)) {
            const value = data[field];

            // Check if field exists
            if (value === undefined || value === null) {
                errors.push(`${field} is required`);
                continue;
            }

            // Validate type
            if (typeof value !== rules.type) {
                errors.push(`${field} must be a ${rules.type}`);
                continue;
            }

            // Validate string rules
            if (rules.type === 'string') {
                // Check min length
                if (rules.minLength && value.length < rules.minLength) {
                    errors.push(`${field} must be at least ${rules.minLength} characters`);
                }

                // Check max length
                if (rules.maxLength && value.length > rules.maxLength) {
                    errors.push(`${field} must be at most ${rules.maxLength} characters`);
                }

                // Check pattern
                if (rules.pattern && !rules.pattern.test(value)) {
                    errors.push(`${field} format is invalid`);
                }

                // Check enum
                if (rules.enum && !rules.enum.includes(value)) {
                    errors.push(`${field} must be one of: ${rules.enum.join(', ')}`);
                }
            }

            validated[field] = value;
        }

        // If there are validation errors, throw them
        if (errors.length > 0) {
            throw new Error(errors.join('; '));
        }

        return validated;
    }

    /**
     * Get all data
     * @returns {Object} All data
     */
    getData() {
        return { ...this.data };
    }

    /**
     * Get public data (excludes sensitive fields)
     * @returns {Object} Public data
     */
    toPublic() {
        const { password, ...publicData } = this.data;
        return publicData;
    }

    /**
     * Update data
     * @param {Object} updates Update data
     * @returns {Object} Updated data
     */
    update(updates) {
        // Validate and merge updates
        const validated = this.validate({
            ...this.data,
            ...updates
        });

        this.data = validated;
        return this.getData();
    }

    /**
     * Check if data has required fields
     * @param {Object} data Data to check
     * @returns {boolean} Has required fields
     */
    hasRequiredFields(data) {
        return Object.keys(this.requiredFields)
            .every(field => data[field] !== undefined && data[field] !== null);
    }
}

module.exports = UserModel;