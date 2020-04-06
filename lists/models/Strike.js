const access = require("../../access");
const { Text, DateTime, Relationship } = require("@keystonejs/fields");

const StrikeList = {
    fields: {
        date: { type: DateTime, isRequired: true },
        member: { type: Relationship, isRequired: true, ref: "User" },
        reason: { type: Text }
    },
    // List-level access controls
    access: {
        read: access.userIsAdminOrOwner,
        update: access.userIsAdmin,
        create: access.userIsAdmin,
        delete: access.userIsAdmin,
    },
};

module.exports = StrikeList;

