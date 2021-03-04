/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReturnUserService } from "../utils/types";
import User from "../models/User";

class UserService {
    public static async createUser(
        email: string,
        oauthId: string,
        username: string
    ): Promise<ReturnUserService> {
        const user = {
            email,
            oauthId,
            username,
        };
        try {
            const newUser = await User.create(user);
            return {
                user: newUser,
                success: true,
            };
        } catch (e) {
            console.log(e);
            return {
                user: null,
                success: false,
            };
        }
    }

    public static async getUser(userId: string): Promise<ReturnUserService> {
        try {
            const user = await User.findOne({ _id: userId });
            return {
                user,
                success: true,
            };
        } catch (e) {
            return {
                user: null,
                success: false,
            };
        }
    }
}

export default UserService;
