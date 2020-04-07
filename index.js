
const { Keystone } = require('@keystonejs/keystone');
const { PasswordAuthStrategy } = require('@keystonejs/auth-password');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { StaticApp } = require('@keystonejs/app-static');
const access = require("./access");

const initialiseData = require('./initial-data');

const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');


const PROJECT_NAME = "no4backend";

const cookieSecret = "turn_up_the_radio_and_turn_off_the_lights";

const keystone = new Keystone({
  name: PROJECT_NAME,
  adapter: new Adapter(),
  onConnect: initialiseData,
  cookieSecret
});

require("./lists")(keystone);

const localAuthStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: 'User',
  config: {
    identityField: "email",
    secretField: "password"
  }
});

module.exports = {
  keystone,
  apps: [
    new GraphQLApp({
      apiPath: "/api",
    }),
    new AdminUIApp({
      apiPath: "/api",
      adminPath: "/admin",
      isAccessAllowed: access.userIsAdmin,
      authStrategy: localAuthStrategy,
    }),
    new StaticApp({
      path: "/uploads",
      src: "public/uploads",
    }),
    new StaticApp({
      path: "/",
      src: "public",
      fallback: "index.html"
    })
  ],
};
