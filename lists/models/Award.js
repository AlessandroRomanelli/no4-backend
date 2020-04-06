const access = require("../../access");
const { Text } = require("@keystonejs/fields");

const AwardList = {
    fields: {
        name: { type: Text }
    },
    // List-level access controls
    access: {
        read: true,
        update: access.userIsAdmin,
        create: access.userIsAdmin,
        delete: access.userIsAdmin,
    },
};

module.exports = AwardList;

