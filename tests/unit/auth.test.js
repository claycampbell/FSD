const jwt = require('jsonwebtoken');
const { authenticateToken, authorizeRoles } = require('../../src/middleware/auth');
const { UnauthorizedError } = require('../../src/middleware/error-handler');

describe('Authentication Middleware', () => {
    let mockReq;
    let mockRes;
    let mockNext;

    beforeEach(() => {
        mockReq = {
            headers: {}
        };
        mockRes = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };
        mockNext = jest.fn();
        process.env.JWT_SECRET = 'test-secret';
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('authenticateToken', () => {
        it('should pass valid JWT token', (done) => {
            const token = jwt.sign({ id: '123', role: 'user' }, process.env.JWT_SECRET);
            mockReq.headers.authorization = `Bearer ${token}`;

            mockNext.mockImplementation(() => {
                expect(mockReq.user).toBeDefined();
                expect(mockReq.user.id).toBe('123');
                done();
            });

            authenticateToken(mockReq, mockRes, mockNext);
        });

        it('should reject request with no authorization header', () => {
            mockNext.mockImplementation((err) => {
                expect(err).toBeInstanceOf(UnauthorizedError);
                expect(err.message).toBe('No token provided');
                done();
            });

            authenticateToken(mockReq, mockRes, mockNext);
        });

        it('should reject request with invalid token format', () => {
            mockReq.headers.authorization = 'InvalidFormat token';

            mockNext.mockImplementation((err) => {
                expect(err).toBeInstanceOf(UnauthorizedError);
                expect(err.message).toBe('Invalid token format');
                done();
            });

            authenticateToken(mockReq, mockRes, mockNext);
        });

        it('should reject request with invalid JWT token', () => {
            mockReq.headers.authorization = 'Bearer invalid-token';

            mockNext.mockImplementation((err) => {
                expect(err).toBeInstanceOf(UnauthorizedError);
                expect(err.message).toBe('Invalid token');
                done();
            });

            authenticateToken(mockReq, mockRes, mockNext);
        });

        it('should reject expired JWT token', () => {
            const token = jwt.sign(
                { id: '123', role: 'user' },
                process.env.JWT_SECRET,
                { expiresIn: '0s' }
            );
            mockReq.headers.authorization = `Bearer ${token}`;

            authenticateToken(mockReq, mockRes, mockNext);

            expect(mockNext).toHaveBeenCalledWith(
                expect.any(UnauthorizedError)
            );
            expect(mockNext.mock.calls[0][0].message).toBe('Token expired');
        });
    });

    describe('authorizeRoles', () => {
        beforeEach(() => {
            mockReq.user = {
                id: '123',
                role: 'user'
            };
        });

        it('should authorize user with correct role', (done) => {
            const authorize = authorizeRoles('user', 'admin');
            mockNext.mockImplementation(() => {
                done();
            });
            authorize(mockReq, mockRes, mockNext);

            expect(mockNext).toHaveBeenCalledWith();
        });

        it('should reject user with incorrect role', (done) => {
            const authorize = authorizeRoles('admin');
            mockNext.mockImplementation((err) => {
                expect(err).toBeInstanceOf(UnauthorizedError);
                expect(err.message).toBe('Insufficient permissions');
                done();
            });
            authorize(mockReq, mockRes, mockNext);

            expect(mockNext).toHaveBeenCalled();
        });

        it('should reject if no user in request', (done) => {
            delete mockReq.user;
            const authorize = authorizeRoles('user');
            mockNext.mockImplementation((err) => {
                expect(err).toBeInstanceOf(UnauthorizedError);
                expect(err.message).toBe('Authentication required');
                done();
            });
            authorize(mockReq, mockRes, mockNext);

            expect(mockNext).toHaveBeenCalled();
        });

        it('should accept user with any of the allowed roles', () => {
            mockReq.user.role = 'admin';
            const authorize = authorizeRoles('editor', 'admin', 'superuser');
            mockNext.mockImplementation(() => {
                done();
            });
            authorize(mockReq, mockRes, mockNext);

            expect(mockNext).toHaveBeenCalled();
        });
    });
});