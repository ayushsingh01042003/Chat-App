import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const jwt_token = req.cookies.jwt;
    if (!jwt_token) {
        return res.status(401).json({ error: "Unauthorized: Missing token" });
    }

    try {
        const decodedUser = jwt.verify(jwt_token, process.env.JWT_SECRET as string);
        
        if (decodedUser) {
            res.locals.currUser = decodedUser;
            next();
        } else {
            res.status(400).send({
                msg: "Unauthorized User",
            });
        }
    } catch (error) {
        console.log(error);
        res.status(401).json({ error: "Unauthorized: Invalid token" });
    }
};

export default authMiddleware;