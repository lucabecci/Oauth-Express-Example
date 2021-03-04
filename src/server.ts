import express, { Application, IRouter } from "express";
import morgan from "morgan";
import cors from "cors";

import config from "./config";
import indexRouter from "./routes/index.routes";

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
        this._app.use(morgan(config.DEV ? "dev" : "combined"));
        this._app.use(express.json());
        this._app.use(express.urlencoded({ extended: false }));
        this._app.use(
            cors({
                credentials: true,
            })
        );
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
