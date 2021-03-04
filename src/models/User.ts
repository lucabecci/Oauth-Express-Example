import { SchemaDefinition, model, Schema, Document } from "mongoose";

interface IUser extends Document {
    _id?: string;
    email: string;
    oauthId: string;
    username: string;
}

class UserSchema {
    private _schemaDefinition: SchemaDefinition;
    public _userSchema: Schema;

    constructor() {
        this._schemaDefinition = {
            email: { type: String, required: true, trim: true, unique: true },
            oauthId: { type: String, required: true, trim: true, unique: true },
            username: {
                type: String,
                required: true,
                trim: true,
                unique: true,
            },
        };
        this._userSchema = new Schema(this._schemaDefinition, {
            timestamps: true,
        });
    }
}

const userSchema = new UserSchema();

export default model<IUser>("User", userSchema._userSchema);
