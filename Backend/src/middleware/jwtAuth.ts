import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

interface DecodedToken {
    userName: String,
}

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const header_token = req.body.header_token; // Assuming the token is sent in the request body
    if (!header_token) {
        return res.status(401).json({ error: "Unauthorized: Missing token in request body" });
    }

    try {
        const decoded = jwt.verify(header_token, process.env.JWT_SECRET as string) as DecodedToken;
        
        if (decoded.userName) {
            res.locals.userName = decoded.userName;
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