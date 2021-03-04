export default {
    PORT: process.env.PORT || 4000,
    DB_URI: process.env.DB_URI || "undefined",
    DEV: process.env.DEV || true,
    //google
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID || "",
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET || "",
    GOOGLE_CALLBACK:
        process.env.GOOGLE_CALLBACK || "http://localhost:4000/google/callback",
};
