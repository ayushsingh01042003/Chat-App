import { Request, Response } from "express";
import User from "../models/user.model";


class authController {
    async SignUp(req: Request, res: Response) {
        try {
            const {
                userName,
                password,
                confirmPassword,
                gender
            } = req.body;
    
            if(password !== confirmPassword) {
                return res.status(400).send({msg: "Passwords Don't Match"});
            }

            const userExists = await User.findOne({userName});

            if(userExists) {
                res.status(400).send({msg: "User already Exists"});
            }
            
            const boyPFP = `avatar.iran.liara.run/public/boy?username=${userName}`;
            const girlPFP = `avatar.iran.liara.run/public/girl?username=${userName}`;

            const user = {
                userName,
                password,
                gender,
                profilePic: gender == 'male' ? boyPFP : girlPFP,
            };

            await User.create(user);

            res.status(200).send({msg: "User Successfully created"});

        } catch(error) {
            console.log(error); //Can be send to logs to be saved
        }
        
    }

    async SignIn(req: Request, res: Response) {
        const {userName, password} = req.body;

        const userExists = await User.findOne({
            userName,
            password,
        })

        if(!userExists) {
            res.status(400).send({msg: "User does not exist"});
        } else {
            
        }
    }

    async LogOut(req: Request, res: Response) {
        res.send('This is LogOut');
    }
}

export default new authController();