const access = require("../../access");
const { Text, Relationship } = require("@keystonejs/fields");

const SectionList = {
    fields: {
        name: { type: Text, isRequired: true },
        description: { type: Text },
        groups: {
            type: Relationship,
            ref: "Group.section",
            many: true
        },
        unit: {
            type: Relationship,
            ref: "Unit.sections"
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

module.exports = SectionList;

