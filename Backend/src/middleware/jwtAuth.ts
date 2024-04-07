import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

interface DecodedToken {
    userName: String,
}

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const header_token = req.body.header_token;
    const token = header_token.split(" ");
    const jwtToken = token[1];

    try {
        const decoded = jwt.verify(jwtToken, process.env.JWT_SECRET as string) as DecodedToken;

        if(decoded.userName) {
            next();
        } else {
            res.status(400).send({
                msg: "Unauthrized User",
            })
        }

    } catch(error) {
        console.log(error);
    }

}

export default authMiddleware;
