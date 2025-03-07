const request = require('supertest');
const app = require('../../src/app');
const UserService = require('../../src/services/user.service');

describe('User API Integration Tests', () => {
    let userService;
    const validUserData = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        role: 'user'
    };

    beforeEach(async () => {
        userService = new UserService();
        // Clear users before each test
        await userService.clear();
    });

    describe('POST /api/users', () => {
        it('should create a new user', async () => {
            const response = await request(app)
                .post('/api/users')
                .send(validUserData)
                .expect(201);

            expect(response.body.success).toBe(true);
            expect(response.body.data).toMatchObject(validUserData);
            expect(response.body.data.id).toBeDefined();
        });

        it('should return 400 for invalid data', async () => {
            const invalidData = { firstName: 'John' };
            const response = await request(app)
                .post('/api/users')
                .send(invalidData)
                .expect(400);

            expect(response.body.success).toBe(false);
            expect(response.body.message).toBeDefined();
        });

        it('should return 400 for duplicate email', async () => {
            await request(app)
                .post('/api/users')
                .send(validUserData);

            const response = await request(app)
                .post('/api/users')
                .send(validUserData)
                .expect(400);

            expect(response.body.success).toBe(false);
            expect(response.body.message).toContain('email already exists');
        });
    });

    describe('GET /api/users', () => {
        beforeEach(async () => {
            await request(app)
                .post('/api/users')
                .send(validUserData);

            await request(app)
                .post('/api/users')
                .send({
                    ...validUserData,
                    email: 'jane@example.com',
                    firstName: 'Jane'
                });
        });

        it('should return all users', async () => {
            const response = await request(app)
                .get('/api/users')
                .expect(200);

            expect(response.body.success).toBe(true);
            expect(response.body.data).toHaveLength(2);
            expect(response.body.data[0]).toMatchObject(validUserData);
        });
    });

    describe('GET /api/users/:id', () => {
        let userId;

        beforeEach(async () => {
            const response = await request(app)
                .post('/api/users')
                .send(validUserData);
            userId = response.body.data.id;
        });

        it('should return user by ID', async () => {
            const response = await request(app)
                .get(`/api/users/${userId}`)
                .expect(200);

            expect(response.body.success).toBe(true);
            expect(response.body.data).toMatchObject(validUserData);
        });

        it('should return 404 for non-existent user', async () => {
            const response = await request(app)
                .get('/api/users/nonexistent-id')
                .expect(404);

            expect(response.body.success).toBe(false);
            expect(response.body.message).toBeDefined();
        });
    });

    describe('PUT /api/users/:id', () => {
        let userId;

        beforeEach(async () => {
            const response = await request(app)
                .post('/api/users')
                .send(validUserData);
            userId = response.body.data.id;
        });

        it('should update user data', async () => {
            const updates = { firstName: 'Jane' };
            const response = await request(app)
                .put(`/api/users/${userId}`)
                .send(updates)
                .expect(200);

            expect(response.body.success).toBe(true);
            expect(response.body.data.firstName).toBe('Jane');
            expect(response.body.data.lastName).toBe(validUserData.lastName);
        });

        it('should return 404 for non-existent user', async () => {
            const updates = { firstName: 'Jane' };
            const response = await request(app)
                .put('/api/users/nonexistent-id')
                .send(updates)
                .expect(404);

            expect(response.body.success).toBe(false);
            expect(response.body.message).toBeDefined();
        });

        it('should return 400 for invalid updates', async () => {
            const invalidUpdates = { firstName: '' };
            const response = await request(app)
                .put(`/api/users/${userId}`)
                .send(invalidUpdates)
                .expect(400);

            expect(response.body.success).toBe(false);
            expect(response.body.message).toBeDefined();
        });
    });

    describe('DELETE /api/users/:id', () => {
        let userId;

        beforeEach(async () => {
            const response = await request(app)
                .post('/api/users')
                .send(validUserData);
            userId = response.body.data.id;
        });

        it('should delete user', async () => {
            await request(app)
                .delete(`/api/users/${userId}`)
                .expect(200);

            const response = await request(app)
                .get(`/api/users/${userId}`)
                .expect(404);

            expect(response.body.success).toBe(false);
        });

        it('should return 404 for non-existent user', async () => {
            const response = await request(app)
                .delete('/api/users/nonexistent-id')
                .expect(404);

            expect(response.body.success).toBe(false);
            expect(response.body.message).toBeDefined();
        });
    });
});