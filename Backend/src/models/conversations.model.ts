import mongoose, {Schema} from "mongoose";

interface Conversations {
    participants: String,
    messages: Schema.Types.ObjectId
}

const conversationSchema = new Schema({
    participants: [
        {
            type: String,
            ref: "User",
        }
    ],
    messages:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Message',
            default: [],
        }
    ], 
}, {timestamps: true});

export default mongoose.model<Conversations>('Conversations', conversationSchema);