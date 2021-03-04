import { Router, IRouter } from "express";
import isLogged from "../middlewares/isLogged";

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
        this._router.get(
            "/protected",
            isLogged.logged,
            IndexController.Protected
        );
        this._router.get("/failed", IndexController.Failed);
        this._router.get("/logout", IndexController.Logout);
    }
}

const router = new IndexRouter().getRouter();

export default router;
