const access = require("../../access");
const { Text, Relationship } = require("@keystonejs/fields");

const AwardList = (keystone) => ({
    fields: {
        name: { type: Text },
        icon: { type: Relationship, ref: "Icon" }
    },
    // List-level access controls
    access: {
        read: true,
        update: access.userIsAdmin,
        create: access.userIsAdmin,
        delete: access.userIsAdmin,
    }
});

module.exports = AwardList;

