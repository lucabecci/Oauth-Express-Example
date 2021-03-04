import { IUser } from "src/models/User";

export interface ReturnUserService {
    user: IUser | null;
    success: boolean;
}
