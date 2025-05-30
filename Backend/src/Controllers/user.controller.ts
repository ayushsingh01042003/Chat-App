import { Request, Response } from "express"
import prisma from "../utils";

class UserController {
    async updateBio(req: Request, res: Response) {
        const { content } = req.body;
        try {
            const currUser = res.locals.currUser;
            
            const updatedUser = await prisma.user.update({
                where: {
                    email: currUser.email, 
                },
                data: {
                    bio: content,
                }
            });

            return res
                    .status(200)
                    .send(updatedUser);

        } catch (error) {
            return res
                    .status(400)
                    .send({
                        msg: "Internal Server Error"
                    })
        }
    }
}

export default new UserController();