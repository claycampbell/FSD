const UserModel = require('../../src/models/user.model');

describe('UserModel', () => {
    const validUserData = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        role: 'user'
    };

    describe('constructor', () => {
        it('should create a new user with valid data', () => {
            const user = new UserModel(validUserData);
            expect(user.getData()).toEqual(validUserData);
        });

        it('should throw error for missing required fields', () => {
            const invalidData = { firstName: 'John' };
            expect(() => new UserModel(invalidData)).toThrow();
        });
    });

    describe('validate', () => {
        it('should validate email format', () => {
            const invalidEmail = { ...validUserData, email: 'invalid-email' };
            expect(() => new UserModel(invalidEmail)).toThrow();
        });

        it('should validate name length', () => {
            const shortName = { ...validUserData, firstName: 'J' };
            expect(() => new UserModel(shortName)).toThrow();

            const longName = { ...validUserData, firstName: 'J'.repeat(51) };
            expect(() => new UserModel(longName)).toThrow();
        });

        it('should validate role values', () => {
            const invalidRole = { ...validUserData, role: 'invalid' };
            expect(() => new UserModel(invalidRole)).toThrow();
        });
    });

    describe('toPublic', () => {
        it('should return public data without sensitive fields', () => {
            const user = new UserModel({
                ...validUserData,
                password: 'secret'
            });
            const publicData = user.toPublic();
            expect(publicData).not.toHaveProperty('password');
            expect(publicData).toEqual(validUserData);
        });
    });

    describe('update', () => {
        it('should update valid fields', () => {
            const user = new UserModel(validUserData);
            const updates = { firstName: 'Jane' };
            user.update(updates);
            expect(user.getData().firstName).toBe('Jane');
        });

        it('should validate updated data', () => {
            const user = new UserModel(validUserData);
            const invalidUpdates = { email: 'invalid-email' };
            expect(() => user.update(invalidUpdates)).toThrow();
        });
    });

    describe('hasRequiredFields', () => {
        it('should return true for data with all required fields', () => {
            const user = new UserModel(validUserData);
            expect(user.hasRequiredFields(validUserData)).toBe(true);
        });

        it('should return false for data missing required fields', () => {
            const user = new UserModel(validUserData);
            const incomplete = { firstName: 'John' };
            expect(user.hasRequiredFields(incomplete)).toBe(false);
        });
    });
});