import { Router, IRouter, Request, Response } from "express";

//User Model
class IndexRouter {
    private _router: IRouter;
    constructor() {
        this._router = Router();

        this.initRoutes();
    }
    public getRouter(): IRouter {
        return this._router;
    }

    private initRoutes() {
        this._router.get("/", (_: Request, res: Response) => {
            res.status(200).json({
                message: "Hello",
            });
        });
        this._router.get("/about", (_: Request, res: Response) => {
            res.status(200).json({
                message:
                    "This is a simple REST API where you can see all oauths with passpot",
            });
        });
    }
}

const router = new IndexRouter().getRouter();

export default router;
