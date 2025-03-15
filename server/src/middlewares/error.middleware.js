import mongoose from "mongoose";
import { ApiError } from "../utils/ApiError.js";

const errorHandler = (err, req, res, next) => {
    let error = err;

    if (!(error instanceof ApiError)) {  // Corrected the instanceof check
        const statusCode = error.statusCode || (error instanceof mongoose.Error ? 500 : 400);
        const message = error.message || "Something went wrong";
        error = new ApiError(statusCode, message, error?.errors || [], error?.stack);
    }

    const response = {
        success: false,
        message: error.message,
        ...(process.env.NODE_ENV === "development" && { stack: error.stack })
    };

    return res.status(error.statusCode || 500).json(response);  // Added fallback to 500
};

export { errorHandler };
