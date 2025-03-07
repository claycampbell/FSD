const UserService = require('../../src/services/user.service');
const UserModel = require('../../src/models/user.model');

describe('UserService', () => {
    let userService;
    const validUserData = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        role: 'user'
    };

    beforeEach(() => {
        userService = new UserService();
    });

    describe('create', () => {
        it('should create a new user with valid data', async () => {
            const user = await userService.create(validUserData);
            expect(user.getData()).toMatchObject(validUserData);
        });

        it('should fail to create user with invalid data', async () => {
            const invalidData = { firstName: 'John' };
            await expect(userService.create(invalidData)).rejects.toThrow();
        });

        it('should fail to create user with existing email', async () => {
            await userService.create(validUserData);
            await expect(userService.create(validUserData)).rejects.toThrow();
        });
    });

    describe('get', () => {
        it('should return user by ID', async () => {
            const created = await userService.create(validUserData);
            const user = await userService.get(created.getData().id);
            expect(user.getData()).toMatchObject(validUserData);
        });

        it('should throw error for non-existent user', async () => {
            await expect(userService.get('nonexistent-id')).rejects.toThrow();
        });
    });

    describe('list', () => {
        beforeEach(async () => {
            await userService.create(validUserData);
            await userService.create({
                ...validUserData,
                email: 'jane@example.com',
                firstName: 'Jane'
            });
        });

        it('should return all users', async () => {
            const users = await userService.list();
            expect(users).toHaveLength(2);
            expect(users[0]).toBeInstanceOf(UserModel);
        });

        it('should return empty array when no users exist', async () => {
            userService = new UserService(); // Reset service
            const users = await userService.list();
            expect(users).toHaveLength(0);
        });
    });

    describe('update', () => {
        let userId;

        beforeEach(async () => {
            const user = await userService.create(validUserData);
            userId = user.getData().id;
        });

        it('should update existing user', async () => {
            const updates = { firstName: 'Jane' };
            const updated = await userService.update(userId, updates);
            expect(updated.getData().firstName).toBe('Jane');
        });

        it('should fail to update non-existent user', async () => {
            const updates = { firstName: 'Jane' };
            await expect(userService.update('nonexistent-id', updates)).rejects.toThrow();
        });

        it('should validate updated data', async () => {
            const invalidUpdates = { firstName: '' };
            await expect(userService.update(userId, invalidUpdates)).rejects.toThrow();
        });
    });

    describe('delete', () => {
        let userId;

        beforeEach(async () => {
            const user = await userService.create(validUserData);
            userId = user.getData().id;
        });

        it('should delete existing user', async () => {
            await userService.delete(userId);
            await expect(userService.get(userId)).rejects.toThrow();
        });

        it('should fail to delete non-existent user', async () => {
            await expect(userService.delete('nonexistent-id')).rejects.toThrow();
        });
    });
});