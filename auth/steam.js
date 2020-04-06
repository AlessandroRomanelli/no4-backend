const PassportSteam = require('passport-steam').Strategy;
const { PassportAuthStrategy } = require('@keystonejs/auth-passport');

class SteamAuthStrategy extends PassportAuthStrategy {
    constructor(keystone, listKey, config) {
        console.log("Creating Steam Strategy: " + config);
        super(SteamAuthStrategy.authType, keystone, listKey, config, PassportSteam);
    }
}

SteamAuthStrategy.authType = 'steam';

module.exports = {
    type: SteamAuthStrategy,
    list: 'User',
    config: {
        idField: "steamid",
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