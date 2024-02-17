import User from '../models/user.model.js';
import AppError from '../utils/appError.js';
import asyncHandler from '../middlewares/asyncHandler.middleware.js';

const cookieOptions = {
    secure: process.env.NODE_ENVc === 'production' ? true : false,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
};

export const registerUser = asyncHandler(async (req, res, next) => {
    const { fullName, rollNumber, yearOfPassing, collegeEmail, personalEmail, LinkedIn, workingStatus, currentlyWorkingAt, currentLocated, branch, program, contactNumber } = req.body;

    if (!fullName || !collegeEmail || !yearOfPassing || !LinkedIn || !rollNumber || !workingStatus || !currentlyWorkingAt || !currentLocated || !branch || !program) {
        return next(new AppError('All fields are required', 400));
    }

    const userExists = await User.findOne({ collegeEmail });

    if (userExists) {
        return next(new AppError('Email already exists', 400));
    }

    const user = await User.create({
        fullName,
        collegeEmail,
        yearOfPassing,
        gender,
        LinkedIn,
        workingStatus,
        currentlyWorkingAt,
        currentLocated
    });

    if (!user) {
        return next(
            new AppError('User registration failed, please try again later', 400)
        );
    }

    await user.save();


})