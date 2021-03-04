import express, { Application, IRouter } from "express";
import morgan from "morgan";
import cors from "cors";
import cookieSession from "cookie-session";
import passport from "passport";

import config from "./config";
import indexRouter from "./routes/index.routes";

//strategys
import "./middlewares/strategies/googleStrategy";

class Server {
    private _app: Application;
    private _indexRouter: IRouter;
    constructor() {
        this._app = express();
        this._indexRouter = indexRouter;
        this.initDatabase();
        this.initConfig();
        this.initRoutes();
    }
    private initDatabase() {
        console.log("database");
    }
    private initConfig() {
        this._app.use(
            cors({
                credentials: true,
            })
        );
        this._app.use(morgan(config.DEV ? "dev" : "combined"));
        this._app.use(express.json());
        this._app.use(express.urlencoded({ extended: false }));

        //cookie
        this._app.use(
            cookieSession({
                name: "auth",
                keys: ["key1, key2"],
                maxAge: 60 * 60 * 60,
            })
        );
        this._app.use(passport.initialize());
        this._app.use(passport.session());
    }
    private initRoutes() {
        this._app.use(this._indexRouter);
    }

    public run(): void {
        this._app.listen(config.PORT, () => {
            console.log("Server on port:", config.PORT);
        });
    }
}
export default Server;
