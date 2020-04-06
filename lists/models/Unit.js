const access = require("../../access");
const { Text, Relationship } = require("@keystonejs/fields");

const UnitList = {
    fields: {
        name: { type: Text, isRequired: true },
        description: { type: Text },
        sections: {
            type: Relationship,
            ref: "Section",
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

module.exports = UnitList;

