const { GoogleAuthStrategy } = require('@keystonejs/auth-passport');

module.exports = {
    type: GoogleAuthStrategy,
    list: 'User',
    config: {
        idField: "googleId",
        appId: "1DE2A6AAED106A34C4ABA735169F82A6",
        appSecret: "dont_know",
        loginPath: "/auth/steam/login",
        callbackPath: "/auth/steam/return",
        strategyConfig: {
            returnURL: "/auth/steam/return",
            realm: "http://localhost:3000",
            apiKey: "1DE2A6AAED106A34C4ABA735169F82A6",
        }
    }
};