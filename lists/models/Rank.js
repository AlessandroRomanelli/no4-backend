const access = require("../../access");
const { Text, Integer } = require("@keystonejs/fields");

const RankList = (keystone) => ({
        fields: {
            name: { type: Text },
            abbreviation: { type: Text },
            priority: { type: Integer }
        },
        // List-level access controls
        access: {
            read: true,
            update: access.userIsAdmin,
            create: access.userIsAdmin,
            delete: access.userIsAdmin,
        }
});

module.exports = RankList;

