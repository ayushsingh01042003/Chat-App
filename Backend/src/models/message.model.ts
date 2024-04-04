import mongoose, { Schema } from "mongoose";

interface Message {
    senderId: Schema.Types.ObjectId,
    recieverId: Schema.Types.ObjectId,
    message: String
}

const messageSchema = new Schema({
    senderId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    recieverId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    message: {
        type: String,
        required: true,
    }
}, {timestamps: true});

export default mongoose.model<Message>('Message', messageSchema);