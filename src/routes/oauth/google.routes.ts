import { Router, IRouter } from "express";
import passport from "passport";
import IndexController from "../../controllers/index.controller";

//google router
class GoogleRouter {
    private _router: IRouter;

    constructor() {
        this._router = Router();

        this.initRoutes();
    }
    public getRouter(): IRouter {
        return this._router;
    }

    private initRoutes() {
        this._router.get(
            "/",
            passport.authenticate("google", { scope: ["profile", "email"] })
        );

        this._router.get(
            "/callback",
            passport.authenticate("google", { failureRedirect: "/failed" }),
            IndexController.Protected
        );
    }
}

const router = new GoogleRouter().getRouter();

export default router;
