import { Request, Response } from "express";

class authController {
    async SignUp(req: Request, res: Response) {
        res.send('This is SignUp');
    }

    async SignIn(req: Request, res: Response) {
        res.send('This is SignIn');
    }

    async LogOut(req: Request, res: Response) {
        res.send('This is LogOut');
    }
}

export default new authController();