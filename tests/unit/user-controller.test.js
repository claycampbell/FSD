const UserController = require('../../src/controllers/user-controller');
const { ValidationError, NotFoundError } = require('../../src/middleware/error-handler');

describe('UserController', () => {
    let userController;
    let mockUserService;
    let mockReq;
    let mockRes;
    let mockNext;

    beforeEach(() => {
        // Mock user service
        mockUserService = {
            findAll: jest.fn(),
            findById: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
            delete: jest.fn()
        };

        // Create controller instance with mock service
        userController = new UserController(mockUserService);

        // Mock request object
        mockReq = {
            params: {},
            body: {},
            query: {}
        };

        // Mock response object
        mockRes = {
            json: jest.fn(),
            status: jest.fn().mockReturnThis()
        };

        // Mock next function
        mockNext = jest.fn();
    });

    describe('getUsers', () => {
        it('should return all users with default pagination', async () => {
            const mockUsers = [{ id: 1, name: 'Test User' }];
            mockUserService.findAll.mockResolvedValue(mockUsers);

            await userController.getUsers(mockReq, mockRes, mockNext);

            expect(mockUserService.findAll).toHaveBeenCalledWith({
                page: 1,
                limit: 10
            });
            expect(mockRes.json).toHaveBeenCalledWith({
                success: true,
                data: mockUsers
            });
        });

        it('should handle custom pagination parameters', async () => {
            mockReq.query = { page: 2, limit: 20 };
            const mockUsers = [{ id: 1, name: 'Test User' }];
            mockUserService.findAll.mockResolvedValue(mockUsers);

            await userController.getUsers(mockReq, mockRes, mockNext);

            expect(mockUserService.findAll).toHaveBeenCalledWith({
                page: 2,
                limit: 20
            });
        });

        it('should handle validation errors for invalid pagination', async () => {
            mockReq.query = { page: -1 };

            await userController.getUsers(mockReq, mockRes, mockNext);

            expect(mockNext).toHaveBeenCalledWith(expect.any(ValidationError));
        });
    });

    describe('getUserById', () => {
        it('should return user when found', async () => {
            const mockUser = { id: '1', name: 'Test User' };
            mockReq.params = { id: '1' };
            mockUserService.findById.mockResolvedValue(mockUser);

            await userController.getUserById(mockReq, mockRes, mockNext);

            expect(mockUserService.findById).toHaveBeenCalledWith('1');
            expect(mockRes.json).toHaveBeenCalledWith({
                success: true,
                data: mockUser
            });
        });

        it('should throw NotFoundError when user not found', async () => {
            mockReq.params = { id: '999' };
            mockUserService.findById.mockResolvedValue(null);

            await userController.getUserById(mockReq, mockRes, mockNext);

            expect(mockNext).toHaveBeenCalledWith(expect.any(NotFoundError));
        });
    });

    describe('createUser', () => {
        it('should create user with valid data', async () => {
            const userData = {
                firstName: 'John',
                lastName: 'Doe',
                email: 'john@example.com',
                role: 'user'
            };
            mockReq.body = userData;
            mockUserService.create.mockResolvedValue({ id: '1', ...userData });

            await userController.createUser(mockReq, mockRes, mockNext);

            expect(mockUserService.create).toHaveBeenCalledWith(userData);
            expect(mockRes.status).toHaveBeenCalledWith(201);
            expect(mockRes.json).toHaveBeenCalledWith({
                success: true,
                data: expect.objectContaining(userData),
                message: 'User created successfully'
            });
        });

        it('should handle validation errors for invalid user data', async () => {
            mockReq.body = { firstName: 'J' }; // Too short

            await userController.createUser(mockReq, mockRes, mockNext);

            expect(mockNext).toHaveBeenCalledWith(expect.any(ValidationError));
            expect(mockUserService.create).not.toHaveBeenCalled();
        });
    });

    describe('updateUser', () => {
        const updateData = {
            firstName: 'Jane',
            lastName: 'Smith'
        };

        it('should update user with valid data', async () => {
            mockReq.params = { id: '1' };
            mockReq.body = updateData;
            const mockUser = { id: '1', ...updateData };
            mockUserService.findById.mockResolvedValue(mockUser);
            mockUserService.update.mockResolvedValue(mockUser);

            await userController.updateUser(mockReq, mockRes, mockNext);

            expect(mockUserService.update).toHaveBeenCalledWith('1', updateData);
            expect(mockRes.json).toHaveBeenCalledWith({
                success: true,
                data: mockUser,
                message: 'User updated successfully'
            });
        });

        it('should throw NotFoundError when updating non-existent user', async () => {
            mockReq.params = { id: '999' };
            mockReq.body = updateData;
            mockUserService.findById.mockResolvedValue(null);

            await userController.updateUser(mockReq, mockRes, mockNext);

            expect(mockNext).toHaveBeenCalledWith(expect.any(NotFoundError));
            expect(mockUserService.update).not.toHaveBeenCalled();
        });
    });

    describe('deleteUser', () => {
        it('should delete existing user', async () => {
            mockReq.params = { id: '1' };
            const mockUser = { id: '1', name: 'Test User' };
            mockUserService.findById.mockResolvedValue(mockUser);

            await userController.deleteUser(mockReq, mockRes, mockNext);

            expect(mockUserService.delete).toHaveBeenCalledWith('1');
            expect(mockRes.json).toHaveBeenCalledWith({
                success: true,
                message: 'User deleted successfully'
            });
        });

        it('should throw NotFoundError when deleting non-existent user', async () => {
            mockReq.params = { id: '999' };
            mockUserService.findById.mockResolvedValue(null);

            await userController.deleteUser(mockReq, mockRes, mockNext);

            expect(mockNext).toHaveBeenCalledWith(expect.any(NotFoundError));
            expect(mockUserService.delete).not.toHaveBeenCalled();
        });
    });
});