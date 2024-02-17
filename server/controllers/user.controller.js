import User from '../models/user.model.js';
import AppError from '../utils/appError.js';
import asyncHandler from '../middlewares/asyncHandler.middleware.js';
// import jwt from jsonwebtoken
import jwt from 'jsonwebtoken';
const cookieOptions = {
    secure: process.env.NODE_ENVc === 'production' ? true : false,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
};

export const registerUser = asyncHandler(async (req, res, next) => {
    const { fullName, rollNumber, yearOfPassing, collegeEmail, personalEmail, LinkedIn, workingStatus, currentlyWorkingAt, currentLocated, branch, programme , contactNumber , password} = req.body;

    if (!fullName || !collegeEmail || !yearOfPassing || !LinkedIn || !rollNumber || !workingStatus || !currentlyWorkingAt || !currentLocated || !branch || !programme || !password) {
        return next(new AppError('All fields are required', 400));
    }

    const userExists = await User.findOne({ collegeEmail });

    if (userExists) {
        return next(new AppError('Email already exists', 400));
    }

    const user = await User.create({
        fullName,
        rollNumber, 
        branch,
        collegeEmail,
        yearOfPassing,
        contactNumber,
        LinkedIn,
        collegeEmail,
        personalEmail,
        currentLocated,
        workingStatus,
        currentlyWorkingAt,
        password,
        avatar: {
            public_id: collegeEmail,
            secure_url:
              'https://res.cloudinary.com/du9jzqlpt/image/upload/v1674647316/avatar_drzgxv.jpg',
          },
    });

    if (!user) {
        return next(
            new AppError('User registration failed, please try again later', 400)
        );
    }

    if (req.file) {
        try {
          const result = await cloudinary.v2.uploader.upload(req.file.path, {
            folder: 'lms', // Save files in a folder named lms
            width: 250,
            height: 250,
            gravity: 'faces', // This option tells cloudinary to center the image around detected faces (if any) after cropping or resizing the original image
            crop: 'fill',
          });
    
          // If success
          if (result) {
            // Set the public_id and secure_url in DB
            user.avatar.public_id = result.public_id;
            user.avatar.secure_url = result.secure_url;

            fs.rm(`uploads/${req.file.filename}`);
          }
        } catch (error) {
          return next(
            new AppError(error || 'File not uploaded, please try again', 400)
          );
        }
      }

    await user.save();

    const token = jwt.sign(
      {id: user._id, email},
      'shhhh', // process.env.jwtsecret
      {
        expiresIn: "2h"
      }
    );

    user.token = token

    user.password = undefined;

    res.cookie('token', token, cookieOptions);

    res.status(201).json({
        success: true,
        message:'User registered successfully',
        user,
    });
});

export const loginUser = asyncHandler(async (req, res, next) => {
    // Destructuring the necessary data from req object
    const { collegeEmail, password } = req.body;
  
    // Check if the data is there or not, if not throw error message
    if (!collegeEmail || !password) {
      return next(new AppError('collgeEmail and Password are required', 400));
    }
  
    // Finding the user with the sent email
    const user = await User.findOne({ email }).select('+password');
  
    // If no user or sent password do not match then send generic response
    if (!(user && (await user.comparePassword(password)))) {
      return next(
        new AppError('collegeEmail or Password do not match or user does not exist', 401)
      );
    }
  
    // Generating a JWT token
    const token = await user.generateJWTToken();
  
    // Setting the password to undefined so it does not get sent in the response
    user.password = undefined;
  
    // Setting the token in the cookie with name token along with cookieOptions
    res.cookie('token', token, cookieOptions);
  
    // If all good send the response to the frontend
    res.status(200).json({
      success: true,
      message: 'User logged in successfully',
      user,
    });
  });
  