// import { Request, Response } from "express";

// class MessageController {
//     async sendMessage(req: Request, res: Response) {
//         try {
//             const { recieverId } = req.params;
//             const { message } = req.body;
//             const senderId = res.locals.userName;

//             // console.log(senderId, recieverId, message);

//             // Finding if Conversation already exists
//             let conversation = await Conversation.findOne({
//                 participants: { $all: [senderId, recieverId]},
//             })

//             if(!conversation) {
//                 //First time message
//                 conversation = await Conversation.create({
//                     participants: [senderId, recieverId],
//                 });
                
//             }

//             const newMessage = {
//                 senderId,
//                 recieverId,
//                 message
//             }

//             const createdMessage = await Message.create(newMessage);

//             await conversation.updateOne({
//                 $push: { messages: createdMessage._id },
//             });

//             res.status(200).send({
//                 msg: `${createdMessage} Sent Successfully`,
//             });
//         } catch (error) {
//             console.log(error);
//         }

//     }

//     //Try Pagination here
//     async getConversation(req: Request, res: Response) {
//         try {
//             const { recieverId } = req.params;
//             const senderId = res.locals.userName;
    
//             const conversation = await Conversation.findOne({
//                 participants: { $all: [senderId, recieverId]},
//             }).populate("messages");

//             if(!conversation) {
//                 return res.status(400).send({
//                     msg: "No Conversation Found",
//                 });
//             }
    
//             const messages = conversation.messages;
        
//             res.status(200).send({
//                 messages
//             });
//         } catch (error) {
//             console.log(error);
//         }
//     }
// }

// export default new MessageController();