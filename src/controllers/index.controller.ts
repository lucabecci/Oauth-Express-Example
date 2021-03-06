/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
abstract class IndexController {
    public static Index(_req: Request, res: Response): void {
        res.status(200).json({
            message: "Hello",
        });
    }
    public static About(_req: Request, res: Response): void {
        res.status(200).json({
            message:
                "This is a simple REST API where you can see all oauths with passport",
        });
    }

    public static Protected(req: any, res: Response): void {
        res.status(200).json({
            message: `Hello ${req.user.username}`,
        });
    }
    public static Logout(req: Request, res: Response): void {
        req.session = null;
        req.logOut();
        res.redirect("/");
    }

    public static Failed(_req: Request, res: Response): void {
        res.status(400).json({
            message: "Failed to login!",
        });
    }
}

export default IndexController;
