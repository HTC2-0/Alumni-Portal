// This is the utils of an any error 
class AppError extends Error {
    constructor(message, statusCode) {
        super(message);

        this.statusCode = statusCode;

        Error.captureStackTrace(this, this.contructor);
    }
}

export default AppError;