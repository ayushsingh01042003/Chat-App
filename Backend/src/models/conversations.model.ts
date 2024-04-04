import mongoose, {Schema} from "mongoose";

interface Conversations {
    participants: Schema.Types.ObjectId,
    messages: Schema.Types.ObjectId
}

const conversationSchema = new Schema({
    participants: [
        {
            type: Schema.Types.ObjectId,
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