import { Schema, model } from 'mongoose';

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
      type: String,
      required: true,
      trim: true,
      lowercase: true
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