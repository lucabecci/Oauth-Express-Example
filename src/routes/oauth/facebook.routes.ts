import { IRouter, Router } from "express";

//facebook router
class FacebookRouter {
    private _router: IRouter;

    construcutor() {
        this._router = Router();

        this.initRoutes()
    }

    public getRouter(): IRouter {
        return this._router;
    }

    private initRoutes(){
        this._router.get('/', () => console.log("enter"))
    }
}

const router = new FacebookRouter().getRouter();


export default router