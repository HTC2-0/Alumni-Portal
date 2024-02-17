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
        programme: String,
        branch: String,
        contactNumber: String,
        password:String,
        avatar: {
            public_id: {
              type: String,
            },
            secure_url: {
              type: String,
            },
          },
    }
);

const User = model('User', userSchema);

export default User;