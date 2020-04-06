const access = require("../../access");
const { Text } = require("@keystonejs/fields");

const RankList = {
    fields: {
        name: { type: Text },
        abbreviation: { type: Text }
    },
    // List-level access controls
    access: {
        read: true,
        update: access.userIsAdmin,
        create: access.userIsAdmin,
        delete: access.userIsAdmin,
    },
};

module.exports = RankList;

