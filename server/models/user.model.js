import { Schema, model } from 'mongoose';

const userSchema = new Schema(
    {
        fullName: String,
        rollNumber: String,
        yearOfPassing: Number,
        collegeEmail: String,
        personalEmail: String,
        LinkedIn: String,
        workingStatus: String,
        currentlyWorkingAt: String,
        currentLocated: String,
        program: String,
        branch: String,
        contactNumber: String,
    }
);

const User = model('User', userSchema);

export default User;