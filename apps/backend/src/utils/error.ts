export class APIError extends Error {
    constructor(public message: string, public statusCode: number) {
        super(message);
        // Maintain proper stack trace (only available in V8 engines)
        Error.captureStackTrace(this, this.constructor);
    }
    respond() {
        return { message: this.message }
    }
}
