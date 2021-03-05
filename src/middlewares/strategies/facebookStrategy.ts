/* eslint-disable @typescript-eslint/no-explicit-any */
import passport from "passport";
import { Profile, Strategy, StrategyOption } from "passport-facebook";
import User from "../../models/User";
import config from "../../config";

class FacebookStrategySetup {
    private static FacebookOpts: StrategyOption = {
        clientID: config.FACEBOOK_CLIENT_ID,
        clientSecret: config.FACEBOOK_CLIENT_SECRET,
        callbackURL: config.FACEBOOK_CALLBACK,
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
                this.FacebookOpts,
                async (
                    _accessToken,
                    _refreshToken,
                    profile: Profile,
                    done: any
                ) => {
                    const user = {
                        username: profile.displayName.replace(/\s/g, ""),
                        email:
                            profile.displayName.replace(/\s/g, "") +
                            "@email.com",
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

FacebookStrategySetup.Setup();
