/* eslint-disable @typescript-eslint/no-explicit-any */
import passport from "passport";
import { Profile, Strategy, StrategyOptions } from "passport-google-oauth20";
import config from "../../config";

class GoogleStrategySetup {
    private static GoogleOptions: StrategyOptions = {
        clientID: config.GOOGLE_CLIENT_ID,
        clientSecret: config.GOOGLE_CLIENT_SECRET,
        callbackURL: config.GOOGLE_CALLBACK,
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
                this.GoogleOptions,
                (_accessToken, _refreshToken, profile: Profile, done: any) => {
                    const user = {
                        username: profile.displayName.replace(/\s/g, ""),
                        email: profile.emails?.[0].value,
                        oauthId: profile.id,
                    };
                    console.log(user);
                    return done(null, user);
                }
            )
        );
    }
}

GoogleStrategySetup.Setup();
