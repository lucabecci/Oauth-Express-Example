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
                "This is a simple REST API where you can see all oauths with passpot",
        });
    }
}

export default IndexController;
