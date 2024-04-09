import { Request, Response } from "express";
import Message from "../models/message.model";
import Conversation from "../models/conversations.model";

class MessageController {
    async sendMessage(req: Request, res: Response) {
        try {
            const { recieverId } = req.params;
            const { message } = req.body;
            const senderId = res.locals.userName;

            // console.log(senderId, recieverId, message);

            // Finding if Conversation already exists
            let conversation = await Conversation.findOne({
                participants: { $all: [senderId, recieverId]},
            })

            if(!conversation) {
                //First time message
                conversation = await Conversation.create({
                    participants: [senderId, recieverId],
                });
                
            }

            const newMessage = {
                senderId,
                recieverId,
                message
            }

            const createdMessage = await Message.create(newMessage);

            await conversation.updateOne({
                $push: { messages: createdMessage._id },
            });

            res.status(200).send({
                msg: `${newMessage} Sent Successfully`,
            });
        } catch (error) {
            console.log(error);
        }

    }
}

export default new MessageController();