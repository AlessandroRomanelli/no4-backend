const access = require("../../access");
const { Text, Relationship } = require("@keystonejs/fields");

const GroupList = {
    fields: {
        name: { type: Text, isRequired: true },
        description: { type: Text },
        members: {
            type: Relationship,
            ref: "User",
            many: true
        }
    },
    // List-level access controls
    access: {
        read: access.userIsAny,
        update: access.userIsAdmin,
        create: access.userIsAdmin,
        delete: access.userIsAdmin,
    },
};

module.exports = GroupList;

