import mongoose, { ConnectOptions, Mongoose } from "mongoose";
import config from "src/config";

class Database {
    private _mongoose: Mongoose;
    private _opts: ConnectOptions;

    constructor() {
        this._mongoose = mongoose;
        this._opts = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        };
    }

    public async connection(): Promise<void> {
        let retries = 5;
        while (retries) {
            try {
                await this._mongoose.connect(config.DB_URI, this._opts);
                console.log("DB is connected");
                break;
            } catch (e) {
                console.log(e);
                retries -= 1;
                console.log("RETRIES LEFT: ", retries);
                await new Promise((res) => setTimeout(res, 5000));
            }
        }
    }
}

export default Database;
