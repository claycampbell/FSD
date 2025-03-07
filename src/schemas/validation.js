const Joi = require('joi');

const userSchema = Joi.object({
    email: Joi.string()
        .email()
        .required()
        .messages({
            'string.email': 'Please provide a valid email address',
            'any.required': 'Email is required'
        }),
    
    password: Joi.string()
        .min(8)
        .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
        .messages({
            'string.pattern.base': 'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character'
        })
        .required(),
    
    name: Joi.string()
        .min(2)
        .max(50)
        .required()
        .messages({
            'string.min': 'Name must be at least 2 characters',
            'string.max': 'Name must be less than 50 characters',
            'any.required': 'Name is required'
        }),
    
    username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required()
        .messages({
            'string.alphanum': 'Username must only contain alphanumeric characters',
            'string.min': 'Username must be at least 3 characters',
            'string.max': 'Username must be less than 30 characters',
            'any.required': 'Username is required'
        })
});

const photoSchema = Joi.object({
    title: Joi.string()
        .min(3)
        .max(100)
        .required()
        .messages({
            'string.min': 'Title must be at least 3 characters',
            'string.max': 'Title must be less than 100 characters',
            'any.required': 'Title is required'
        }),
    
    description: Joi.string()
        .max(500)
        .optional()
        .messages({
            'string.max': 'Description must be less than 500 characters'
        }),
    
    url: Joi.string()
        .uri()
        .required()
        .messages({
            'string.uri': 'URL must be a valid URI',
            'any.required': 'URL is required'
        }),
    
    tags: Joi.array()
        .items(Joi.string())
        .optional()
});

const collectionSchema = Joi.object({
    name: Joi.string()
        .min(3)
        .max(100)
        .required()
        .messages({
            'string.min': 'Name must be at least 3 characters',
            'string.max': 'Name must be less than 100 characters',
            'any.required': 'Name is required'
        }),
    
    description: Joi.string()
        .max(500)
        .optional()
        .messages({
            'string.max': 'Description must be less than 500 characters'
        }),
    
    isPrivate: Joi.boolean()
        .default(false),
    
    photos: Joi.array()
        .items(Joi.string())
        .optional()
});

const searchSchema = Joi.object({
    query: Joi.string()
        .optional(),
    
    tags: Joi.array()
        .items(Joi.string())
        .optional(),
    
    sort: Joi.string()
        .valid('recent', 'popular', 'relevant')
        .default('recent')
});

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
        .valid('recent', 'oldest', 'popular')
        .default('recent')
});

module.exports = {
    userSchema,
    photoSchema,
    collectionSchema,
    searchSchema,
    paginationSchema
};