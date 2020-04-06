const access = require("../../access");
const { Text, DateTime, Relationship } = require("@keystonejs/fields");

const EventList = {
    fields: {
        name: { type: Text, isRequired: true },
        description: { type: Text },
        date: {
            type: DateTime,
            format: "DD/MM/YY h:mm",
        },
        attendees: {
            type: Relationship,
            ref: "User",
            many: true
        },
    },
    // List-level access controls
    access: {
        read: access.userIsAny,
        update: access.userIsAdmin,
        create: access.userIsAdmin,
        delete: access.userIsAdmin,
    },
};

module.exports = EventList;

