import { Request, Response } from "express";
import User from "../models/user.model";
import bcryptjs from "bcryptjs";
import jwt, { Secret } from "jsonwebtoken";

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

            const salt = await bcryptjs.genSalt(10);
            const hashedPassword = await bcryptjs.hash(password, salt); 
            
            const boyPFP = `avatar.iran.liara.run/public/boy?username=${userName}`;
            const girlPFP = `avatar.iran.liara.run/public/girl?username=${userName}`;

            const user = {
                userName,
                password: hashedPassword,
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
        const { userName, password } = req.body;
    
        const userExists = await User.findOne({ userName });
        if (!userExists) {
            return res.status(400).send({ msg: "User does not exist" });
        }
    
        const passwordMatch = await bcryptjs.compare(password, userExists.password as string);
        if (!passwordMatch) {
            return res.status(400).send({ msg: "Incorrect password" });
        }
    
        const secret_key: string | undefined = process.env.JWT_SECRET;
        if (!secret_key) {
            throw new Error('JWT_SECRET is not defined');
        }
    
        const token = jwt.sign({ userName }, secret_key);
        res.status(200).send({ token });
    }

    async LogOut(req: Request, res: Response) {
        localStorage.removeItem('token');
        res.status(200).send({msg: "Logged Out"});
    }
}

export default new authController();