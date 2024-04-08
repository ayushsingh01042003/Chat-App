import { Request, Response } from "express";
import Message from "../models/message.model";

class MessageController {
    async sendMessage(req: Request, res: Response) {
        try {
            const { recieverId } = req.params;
            const { message } = req.body;
            const senderId = res.locals.userName;

            res.status(200).send({
                msg: "Message Sent Successfully",
            });
        } catch (error) {
            console.log(error);
        }

    }
}

export default new MessageController();