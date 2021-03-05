import { IRouter, Router } from "express";
import passport from "passport";
import OauthController from "../../controllers/oauth.controller";

//facebook router
class FacebookRouter {
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
            passport.authenticate("facebook", {
                scope: ["public_profile"],
            })
        );

        this._router.get(
            "/callback",
            passport.authenticate("facebook", { failureRedirect: "/failed" }),
            OauthController.Redirect
        );
    }
}

const router = new FacebookRouter().getRouter();

export default router;
