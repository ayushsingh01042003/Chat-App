import mongoose, { Schema } from "mongoose";

interface Message {
    senderId: String,
    recieverId: String,
    message: String
}

const messageSchema = new Schema({
    senderId: {
        type: String,
        ref: "User",
        required: true,
    },
    recieverId: {
        type: String,
        ref: "User",
        required: true
    },
    message: {
        type: String,
        required: true,
    }
}, {timestamps: true});

export default mongoose.model<Message>('Message', messageSchema);