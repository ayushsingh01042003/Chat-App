import { Request, Response } from "express";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "../utils";
class authController {
    async signup(req: Request, res: Response) {
        try {
            const {
                username,
                email,
                password,
                confirmPassword,
            } = req.body;
    
            if(password !== confirmPassword) {
                return res.status(400).send({msg: "Passwords Don't Match"});
            }

            const userExists = await prisma.user.findUnique({
                where: {
                    email: email,
                }
            })

            if(userExists) {
                return res.status(400).send({msg: "User already Exists"});
            }

            const salt = await bcryptjs.genSalt(10);
            const hashedPassword = await bcryptjs.hash(password, salt); 

            const user = {
                username,
                email,
                password_hash: hashedPassword,
            };

            await prisma.user.create({
                data: user
            });

            return res.status(200).send({msg: "User Successfully created"});

        } catch(error) {
            console.log(error);
        }
    }

    async signin(req: Request, res: Response) {
        const { email, password } = req.body;
    
        const userExists = await prisma.user.findUnique({
            where: {
                email,
            }
        })

        if (!userExists) {
            return res.status(400).send({ msg: "User does not exist" });
        }
    
        const passwordMatch = await bcryptjs.compare(password, userExists.password_hash);
        if (!passwordMatch) {
            return res.status(400).send({ msg: "Incorrect password" });
        }
        
        try {
            const secret_key: string | undefined = process.env.JWT_SECRET;
            if (!secret_key) {
                throw new Error('JWT_SECRET is not defined');
            }

            const token = jwt.sign({ userExists }, secret_key);
            return res
                    .status(200)
                    .cookie('jwt', token, {
                        sameSite: "strict",
                        maxAge: 24 * 60 * 60 * 1000,
                        httpOnly: true,
                    })
                    .send({
                        msg: "Login Successfull",
                    });   
        } catch (error) {
            res.status(500).send({
                msg: "Internal Server Error",
            })
            console.log(error);
        }
    }

    async logout(req: Request, res: Response) {
        return res
                .status(200)
                .clearCookie('jwt')
                .send("Logged Out successfully");
    }
}

export default new authController();