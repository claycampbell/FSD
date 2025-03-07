const Joi = require('joi');
const {
    userSchema,
    photoSchema,
    collectionSchema,
    searchSchema,
    paginationSchema
} = require('../../src/schemas/validation');

describe('Validation Schemas', () => {
    describe('User Schema', () => {
        it('should validate correct user data', () => {
            const validUser = {
                email: 'test@example.com',
                password: 'Password123!',
                name: 'John Doe',
                username: 'johndoe'
            };

            const { error } = userSchema.validate(validUser);
            expect(error).toBeUndefined();
        });

        it('should reject invalid email', () => {
            const invalidUser = {
                email: 'not-an-email',
                password: 'Password123!',
                name: 'John Doe',
                username: 'johndoe'
            };

            const { error } = userSchema.validate(invalidUser);
            expect(error).toBeDefined();
            expect(error.details[0].path).toEqual(['email']);
        });

        it('should reject weak password', () => {
            const weakPasswordUser = {
                email: 'test@example.com',
                password: '123',
                name: 'John Doe',
                username: 'johndoe'
            };

            const { error } = userSchema.validate(weakPasswordUser);
            expect(error).toBeDefined();
            expect(error.details[0].path).toEqual(['password']);
        });
    });

    describe('Photo Schema', () => {
        it('should validate correct photo data', () => {
            const validPhoto = {
                title: 'Beautiful Sunset',
                description: 'A stunning sunset at the beach',
                url: 'https://example.com/photo.jpg',
                tags: ['nature', 'sunset', 'beach']
            };

            const { error } = photoSchema.validate(validPhoto);
            expect(error).toBeUndefined();
        });

        it('should allow empty description', () => {
            const photoWithoutDesc = {
                title: 'Beautiful Sunset',
                url: 'https://example.com/photo.jpg',
                tags: ['nature']
            };

            const { error } = photoSchema.validate(photoWithoutDesc);
            expect(error).toBeUndefined();
        });

        it('should reject invalid URL', () => {
            const invalidPhoto = {
                title: 'Beautiful Sunset',
                url: 'not-a-url',
                tags: ['nature']
            };

            const { error } = photoSchema.validate(invalidPhoto);
            expect(error).toBeDefined();
            expect(error.details[0].path).toEqual(['url']);
        });
    });

    describe('Collection Schema', () => {
        it('should validate correct collection data', () => {
            const validCollection = {
                name: 'Nature Photos',
                description: 'Collection of beautiful nature photos',
                isPrivate: false,
                photos: ['photo1', 'photo2']
            };

            const { error } = collectionSchema.validate(validCollection);
            expect(error).toBeUndefined();
        });

        it('should validate collection without photos', () => {
            const newCollection = {
                name: 'Empty Collection',
                description: 'A new empty collection',
                isPrivate: true
            };

            const { error } = collectionSchema.validate(newCollection);
            expect(error).toBeUndefined();
        });
    });

    describe('Search Schema', () => {
        it('should validate correct search parameters', () => {
            const validSearch = {
                query: 'nature sunset',
                tags: ['nature', 'sunset'],
                sort: 'recent'
            };

            const { error } = searchSchema.validate(validSearch);
            expect(error).toBeUndefined();
        });

        it('should validate search with only query', () => {
            const simpleSearch = {
                query: 'sunset'
            };

            const { error } = searchSchema.validate(simpleSearch);
            expect(error).toBeUndefined();
        });

        it('should reject invalid sort option', () => {
            const invalidSearch = {
                query: 'nature',
                sort: 'invalid-sort'
            };

            const { error } = searchSchema.validate(invalidSearch);
            expect(error).toBeDefined();
            expect(error.details[0].path).toEqual(['sort']);
        });
    });

    describe('Pagination Schema', () => {
        it('should validate correct pagination parameters', () => {
            const validPagination = {
                page: 1,
                limit: 20,
                sort: 'recent'
            };

            const { error } = paginationSchema.validate(validPagination);
            expect(error).toBeUndefined();
        });

        it('should use default values when not provided', () => {
            const minimalPagination = {};

            const { value } = paginationSchema.validate(minimalPagination);
            expect(value.page).toBe(1);
            expect(value.limit).toBe(10);
            expect(value.sort).toBe('recent');
        });

        it('should reject negative page number', () => {
            const invalidPagination = {
                page: -1,
                limit: 20
            };

            const { error } = paginationSchema.validate(invalidPagination);
            expect(error).toBeDefined();
            expect(error.details[0].path).toEqual(['page']);
        });

        it('should reject too large limit', () => {
            const invalidPagination = {
                page: 1,
                limit: 1000
            };

            const { error } = paginationSchema.validate(invalidPagination);
            expect(error).toBeDefined();
            expect(error.details[0].path).toEqual(['limit']);
        });
    });
});