import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    rollNumber: {
      type: Number,
      required: true,
      trim: true
    },
    programme: {
      type: String,
      required: true
    },
    branch: {
      type: String,
      required: true
    },
    yearOfPassing: {
      type: Number,
      required: true,
      trim: true
    },
    contactNumber: {
      type: Number,
      required: true,
      trim: true
    },
    LinkedIn: {
      type: String,
      required: true
    },
    collegeEmail: {
        type : String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        match: [
            /\b[A-Za-z0-9._%+-]+@iiitkota\.ac\.in\b/,
            'Please fill college email id with iiitkota.ac.in domain',
        ]
    },
    personalEmail: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },
    currentLocated: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"]
    },

  }, { timestamps: true }
);

const User = model('User', userSchema);

export default User;