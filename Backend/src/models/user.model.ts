import mongoose, {Schema} from "mongoose";

interface User {
    userName: String,
    password: String,
    gender: String,
    profilePic: String
};

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true, 
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    gender: {
        type: String,
        required: true,
        enum: ["male", "female"]
    }, 
    profilePic: {
        type: String,
        default: ""
    }
});

export default mongoose.model<User>('User', userSchema);
