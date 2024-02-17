import jwt from "jsonwebtoken";
import asyncHandler from "./asyncHandler.middleware";
import AppError from "../utils/appError";

export const isLoggedIn = asyncHandler(async (res, _req, next)=>{
    const { token } = req.cookies;

    if(!token) {
        return next(new AppError("Unautherized, please login to continue", 400));
    }

    const decoded = await jwt.verify(token, process.env.JWT_SECRET);

    if(!decoded) {
        return next(new AppError("Unautherized, please login to continue", 400))
    }

    req.user = decoded;

    next();
});

