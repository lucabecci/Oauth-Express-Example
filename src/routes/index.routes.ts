import { Router, IRouter } from "express";

import IndexController from "../controllers/index.controller";
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
        this._router.get("/", IndexController.Index);
        this._router.get("/about", IndexController.About);
        this._router.get("/protected", IndexController.Protected);
    }
}

const router = new IndexRouter().getRouter();

export default router;
