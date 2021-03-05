import express, { Application, IRouter } from "express";
import morgan from "morgan";
import cors from "cors";
import cookieSession from "cookie-session";
import passport from "passport";

import config from "./config";
import indexRouter from "./routes/index.routes";
import googleRouter from "./routes/oauth/google.routes";
import facebookRouter from "./routes/oauth/facebook.routes";

//strategys
import "./middlewares/strategies/googleStrategy";
import "./middlewares/strategies/facebookStrategy";
import Database from "./database/database";

class Server {
    private _app: Application;
    private _database: Database;
    private _indexRouter: IRouter;
    private _googleRouter: IRouter;
    private _facebookRouter: IRouter;
    constructor() {
        this._app = express();
        this._database = new Database();
        this._indexRouter = indexRouter;
        this._googleRouter = googleRouter;
        this._facebookRouter = facebookRouter;
        this.initDatabase();
        this.initConfig();
        this.initRoutes();
    }
    private initDatabase() {
        this._database.connection();
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
        this._app.use("/", this._indexRouter);
        this._app.use("/auth/google", this._googleRouter);
        this._app.use("/auth/facebook", this._facebookRouter);
    }

    public run(): void {
        this._app.listen(config.PORT, () => {
            console.log("Server on port:", config.PORT);
        });
    }
}
export default Server;
