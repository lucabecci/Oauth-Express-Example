/* eslint-disable @typescript-eslint/no-explicit-any */
import passport from "passport";
import { Profile, Strategy, StrategyOptions } from "passport-github2";
import User from "../../models/User";
import config from "../../config";

class GithubStrategySetup {
    private static GithubOptions: StrategyOptions = {
        clientID: config.GITHUB_CLIENT_ID,
        clientSecret: config.GITHUB_CLIENT_SECRET,
        callbackURL: config.GITHUB_CALLBACK,
    };
    public static async Setup(): Promise<void> {
        passport.serializeUser((user, done) => {
            done(null, user);
        });

        passport.deserializeUser((user: any, done) => {
            done(null, user);
        });

        passport.use(
            new Strategy(
                this.GithubOptions,
                async (
                    _accessToken: any,
                    _refreshToken: any,
                    profile: Profile,
                    done: any
                ) => {
                    const user = {
                        username: profile.username,
                        email: profile.username + "@email.com",
                        oauthId: profile.id,
                        provider: profile.provider,
                    };
                    const logged = await User.findOne({
                        email: user.email,
                    });
                    if (logged) {
                        return done(null, user);
                    }
                    await User.create(user);

                    return done(null, user);
                }
            )
        );
    }
}

GithubStrategySetup.Setup();
