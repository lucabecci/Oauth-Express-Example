import { IRouter, Router } from "express";
import passport from "passport";
import OauthController from "../../controllers/oauth.controller";

//facebook router
class GithubRouter {
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
            passport.authenticate("github", { scope: ["user:email"] })
        );

        this._router.get(
            "/callback",
            passport.authenticate("github", { failureRedirect: "/failed" }),
            OauthController.Redirect
        );
    }
}

const router = new GithubRouter().getRouter();

export default router;
