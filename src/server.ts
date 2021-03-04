import express, { Application } from "express";
import morgan from "morgan";
import config from "./config";

class Server {
    private _app: Application;
    constructor() {
        this._app = express();

        this.initDatabase;
        this.initConfig;
        this.initRoutes;
    }
    private initDatabase() {
        console.log("database");
    }
    private initConfig() {
        this._app.use(morgan(config.DEV ? "dev" : "combined"));
        console.log("config");
    }
    private initRoutes() {
        console.log("routes");
    }

    public run() {
        this._app.listen(config.PORT, () => {
            console.log("Server on port:", config.PORT);
        });
    }
}
export default Server;
