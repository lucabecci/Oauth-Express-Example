import dotenv from "dotenv";

dotenv.config();

export default {
    PORT: process.env.PORT || 4000,
    DB_URI: process.env.DB_URI || "mongodb://localhost/oauth",
    DEV: process.env.DEV || true,
    //google
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID || "",
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET || "",
    GOOGLE_CALLBACK: process.env.GOOGLE_CALLBACK || "",
    //facebook
    FACEBOOK_CLIENT_ID: process.env.FACEBOOK_CLIENT_ID || "",
    FACEBOOK_CLIENT_SECRET: process.env.FACEBOOK_CLIENT_SECRET || "",
    FACEBOOK_CALLBACK: process.env.FACEBOOK_CALLBACK || "",
    //github
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID || "",
    GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET || "",
    GITHUB_CALLBACK: process.env.GITHUB_CALLBACK || "",
};
