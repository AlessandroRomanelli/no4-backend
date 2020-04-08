const access = require("../../access");
const { Text, Relationship } = require("@keystonejs/fields");

const LOAList = (keystone) => ({
        fields: {
            event: { type: Relationship, isRequired: true, ref: "Event" },
            member: { type: Relationship, isRequired: true, ref: "User" },
            reason: { type: Text }
        },
        // List-level access controls
        access: {
            read: access.userIsAdmin,
            update: access.userIsAdmin,
            create: access.userIsAdmin,
            delete: access.userIsAdmin,
        }
});

module.exports = LOAList;

