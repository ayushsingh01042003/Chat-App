import { Request, Response } from "express";
import prisma from "../utils";

class MessageController {
    async sendMessage(req: Request, res: Response) {
        const { 
            recieverId, 
            chatId, 
            messageContent 
        } = req.body;

        
    }

    //Try Pagination here
    async getConversation(req: Request, res: Response) {
        
    }
}

export default new MessageController();