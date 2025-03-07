const {
    ValidationError,
    UnauthorizedError,
    ForbiddenError,
    NotFoundError,
    errorHandler
} = require('../../src/middleware/error-handler');

describe('Error Handler Middleware', () => {
    let mockReq;
    let mockRes;
    let mockNext;

    beforeEach(() => {
        mockReq = {};
        mockRes = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };
        mockNext = jest.fn();
        process.env.NODE_ENV = 'development';
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('Custom Error Classes', () => {
        it('should create ValidationError with correct properties', () => {
            const error = new ValidationError('Invalid data');
            expect(error.name).toBe('ValidationError');
            expect(error.message).toBe('Invalid data');
            expect(error.statusCode).toBe(400);
        });

        it('should create UnauthorizedError with correct properties', () => {
            const error = new UnauthorizedError('Not authenticated');
            expect(error.name).toBe('UnauthorizedError');
            expect(error.message).toBe('Not authenticated');
            expect(error.statusCode).toBe(401);
        });

        it('should create ForbiddenError with correct properties', () => {
            const error = new ForbiddenError('Access denied');
            expect(error.name).toBe('ForbiddenError');
            expect(error.message).toBe('Access denied');
            expect(error.statusCode).toBe(403);
        });

        it('should create NotFoundError with correct properties', () => {
            const error = new NotFoundError('Resource not found');
            expect(error.name).toBe('NotFoundError');
            expect(error.message).toBe('Resource not found');
            expect(error.statusCode).toBe(404);
        });
    });

    describe('Error Handler Function', () => {
        it('should handle ValidationError', () => {
            const error = new ValidationError('Invalid input');
            errorHandler(error, mockReq, mockRes, mockNext);

            expect(mockRes.status).toHaveBeenCalledWith(400);
            expect(mockRes.json).toHaveBeenCalledWith(
                expect.objectContaining({
                    status: 'error',
                    statusCode: 400,
                    message: 'Invalid input'
                })
            );
        });

        it('should handle UnauthorizedError', () => {
            const error = new UnauthorizedError('Not authenticated');
            errorHandler(error, mockReq, mockRes, mockNext);

            expect(mockRes.status).toHaveBeenCalledWith(401);
            expect(mockRes.json).toHaveBeenCalledWith(
                expect.objectContaining({
                    status: 'error',
                    statusCode: 401,
                    message: 'Not authenticated'
                })
            );
        });

        it('should handle JWT error types', () => {
            const jwtError = new Error('invalid token');
            jwtError.name = 'JsonWebTokenError';
            errorHandler(jwtError, mockReq, mockRes, mockNext);

            expect(mockRes.status).toHaveBeenCalledWith(401);
            expect(mockRes.json).toHaveBeenCalledWith(
                expect.objectContaining({
                    status: 'error',
                    statusCode: 401,
                    message: 'Invalid token'
                })
            );
        });

        it('should handle TokenExpiredError', () => {
            const tokenError = new Error('jwt expired');
            tokenError.name = 'TokenExpiredError';
            errorHandler(tokenError, mockReq, mockRes, mockNext);

            expect(mockRes.status).toHaveBeenCalledWith(401);
            expect(mockRes.json).toHaveBeenCalledWith(
                expect.objectContaining({
                    status: 'error',
                    statusCode: 401,
                    message: 'Token expired'
                })
            );
        });

        it('should handle unknown errors', () => {
            const error = new Error('Something went wrong');
            errorHandler(error, mockReq, mockRes, mockNext);

            expect(mockRes.status).toHaveBeenCalledWith(500);
            expect(mockRes.json).toHaveBeenCalledWith(
                expect.objectContaining({
                    status: 'error',
                    statusCode: 500,
                    message: 'Something went wrong'
                })
            );
        });

        it('should include stack trace in development mode', () => {
            const error = new Error('Test error');
            errorHandler(error, mockReq, mockRes, mockNext);

            expect(mockRes.json).toHaveBeenCalledWith(
                expect.objectContaining({
                    stack: expect.any(String)
                })
            );
        });

        it('should not include stack trace in production mode', () => {
            process.env.NODE_ENV = 'production';
            const error = new Error('Test error');
            errorHandler(error, mockReq, mockRes, mockNext);

            expect(mockRes.json).toHaveBeenCalledWith(
                expect.not.objectContaining({
                    stack: expect.any(String)
                })
            );
        });
    });
});