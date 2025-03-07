const Joi = require('joi');

const userSchemas = {
    // Schema for user ID parameter
    idParam: Joi.object({
        id: Joi.string()
            .required()
            .regex(/^[0-9a-fA-F]{24}$/)
            .message('Invalid ID format')
    }),

    // Schema for creating a new user
    create: Joi.object({
        firstName: Joi.string()
            .required()
            .min(2)
            .max(50)
            .trim(),
        lastName: Joi.string()
            .required()
            .min(2)
            .max(50)
            .trim(),
        email: Joi.string()
            .required()
            .email()
            .lowercase()
            .trim(),
        role: Joi.string()
            .valid('user', 'admin', 'editor')
            .default('user'),
        password: Joi.string()
            .min(8)
            .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
            .messages({
                'string.pattern.base': 'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character'
            })
            .required(),
        avatar: Joi.string()
            .uri()
            .optional(),
        active: Joi.boolean()
            .default(true)
    }),

    // Schema for updating an existing user
    update: Joi.object({
        firstName: Joi.string()
            .min(2)
            .max(50)
            .trim(),
        lastName: Joi.string()
            .min(2)
            .max(50)
            .trim(),
        email: Joi.string()
            .email()
            .lowercase()
            .trim(),
        role: Joi.string()
            .valid('user', 'admin', 'editor'),
        password: Joi.string()
            .min(8)
            .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
        avatar: Joi.string()
            .uri(),
        active: Joi.boolean()
    }).min(1) // At least one field must be provided for update
};

// Schema for pagination parameters
const paginationSchema = Joi.object({
    page: Joi.number()
        .integer()
        .min(1)
        .default(1),
    limit: Joi.number()
        .integer()
        .min(1)
        .max(100)
        .default(10),
    sort: Joi.string()
        .valid('asc', 'desc')
        .default('asc'),
    sortBy: Joi.string()
        .valid('firstName', 'lastName', 'email', 'role', 'createdAt', 'updatedAt')
        .default('createdAt')
});

/**
 * Validates data against a schema
 * @param {Object} schema - Joi schema
 * @param {Object} data - Data to validate
 * @returns {Object} - Validated data
 * @throws {ValidationError} - If validation fails
 */
function validate(schema, data) {
    const { error, value } = schema.validate(data, {
        abortEarly: false,
        stripUnknown: true,
        convert: true
    });

    if (error) {
        const message = error.details.map(detail => detail.message).join(', ');
        throw new ValidationError(message);
    }

    return value;
}

// Custom error class for validation errors
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
        this.statusCode = 400;
    }
}

module.exports = {
    userSchemas,
    paginationSchema,
    validate,
    ValidationError
};