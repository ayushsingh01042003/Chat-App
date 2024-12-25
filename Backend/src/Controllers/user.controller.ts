// import { Request, Response } from "express"

// class UserController {
//     async getUsersForSidebar(req: Request, res: Response) {
//         try {
//             const loggedInUser = res.locals.userName;

//             const filteredUsers = await User.find({
//                 userName: { $ne: loggedInUser }
//             });

//             res.status(200).send(filteredUsers);
//         } catch (error) {
//             console.log(error);
//         }
//     }
// }

// export default new UserController();