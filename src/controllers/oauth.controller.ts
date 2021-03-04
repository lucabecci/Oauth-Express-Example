import { Request, Response } from "express";

abstract class OauthController {
    public static Redirect(_req: Request, res: Response): void {
        res.redirect("/protected");
    }
}

export default OauthController;
