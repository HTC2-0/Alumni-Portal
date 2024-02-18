import User from "../models/user.model.js";
import AppError from "../utils/appError.js";
import asyncHandler from "../middlewares/asyncHandler.middleware.js";
import { comparePassword } from "../utils/passwordUtils.js";
import validator from "validator";
// import jwt from jsonwebtoken
import jwt from "jsonwebtoken";
// import comparePassword from './models'
const cookieOptions = {
  secure: process.env.NODE_ENVc === "production" ? true : false,
  maxAge: 7 * 24 * 60 * 60 * 1000,
  httpOnly: true,
};

import bcrypt from "bcryptjs"; // Import bcrypt library

export const registerUser = asyncHandler(async (req, res, next) => {
  const {
    fullName,
    rollNumber,
    yearOfAdmission,
    yearOfPassing,
    collegeEmail,
    personalEmail,
    LinkedIn,
    currentLocated,
    branch,
    programme,
    contactNumber,
    password,
    workingStatus,
  } = req.body;

  if (
    !fullName ||
    !collegeEmail ||
    !yearOfAdmission ||
    !yearOfPassing ||
    !LinkedIn ||
    !rollNumber ||
    !currentLocated ||
    !branch ||
    !programme ||
    !password ||
    !rollNumber ||
    !workingStatus
  ) {
    return next(new AppError("All fields are required", 400));
  }

  // Validate college email
  if (!validator.isEmail(collegeEmail)) {
    return next(new AppError("Invalid college email", 402));
  }

  // Validate personal email if it exists
  if (personalEmail && !validator.isEmail(personalEmail)) {
    return next(new AppError("Invalid personal email", 403));
  }

  // check collegeEmail exist or not 
  const userExists = await User.findOne({ collegeEmail });

  if (userExists) {
    return next(new AppError("Email already exists", 405));
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

  const user = await User.create({
    fullName,
    rollNumber,
    programme,
    branch,
    collegeEmail,
    yearOfAdmission,
    yearOfPassing,
    contactNumber,
    LinkedIn,
    personalEmail,
    currentLocated,
    password: hashedPassword, // Use the hashed password
    workingStatus,
  });

  if (!user) {
    return next(
      new AppError("User registration failed, please try again later", 406)
    );
  }

  const token = jwt.sign(
    { id: user._id, email: user.collegeEmail }, // Use user.collegeEmail for the email
    "shhhh", // process.env.jwtsecret
    {
      expiresIn: "2h",
    }
  );

  user.password = undefined;

  res.cookie("token", token, cookieOptions);

  res.status(201).json({
    success: true,
    message: "User registered successfully",
    user,
  });
});

export const loginUser = asyncHandler(async (req, res, next) => {
  // Destructuring the necessary data from req object
  const { collegeEmail, password } = req.body;

  // Check if the data is there or not, if not throw error message
  if (!collegeEmail || !password) {
    return next(new AppError("collgeEmail and Password are required", 407));
  }

  // Finding the user with the sent email
  const user = await User.findOne({ collegeEmail }).select("+password");
  // console.log("Hello");

  // If no user or sent password do not match then send generic response
  if (!(user && (await comparePassword(password, user.password)))) {
    return next(
      new AppError(
        "collegeEmail or Password do not match or user does not exist",
        401
      )
    );
  }

  // Generating a JWT token
  const token = jwt.sign(
    { id: user._id, collegeEmail },
    "shhhh", // process.env.jwtsecret
    {
      expiresIn: "2h",
    }
  );

  // Setting the password to undefined so it does not get sent in the response
  user.password = undefined;

  // Setting the token in the cookie with name token along with cookieOptions
  res.cookie("token", token, cookieOptions);

  // If all good send the response to the frontend
  res.status(200).json({
    success: true,
    message: "User logged in successfully",
    user,
  });
});

// import asyncHandler from 'express-async-handler';
// import User from '../models/User'; // Assuming User model is defined in a separate file

export const data = asyncHandler(async (req, res, next) => {
  try {
    const users = await User.find(
      {},
      "fullName collegeEmail LinkedIn currentlyWorkingAt currentLocated"
    );
    res.json(users); // Assuming you want to send the retrieved users as JSON response
  } catch (error) {
    console.error("Error retrieving data from database:", error);
    res.status(500).send("Error retrieving data from database");
  }
});
