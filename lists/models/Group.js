const access = require("../../access");
const { Text, Relationship } = require("@keystonejs/fields");

const GroupList = {
    fields: {
        name: { type: Text, isRequired: true },
        description: { type: Text },
        section: {
            type: Relationship,
            ref: "Section.groups"
        },
        slots: {
            type: Relationship,
            ref: "Slot.group",
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

