const access = require("../../access");
const { Password, Text, Relationship, Select } = require("@keystonejs/fields");

const UserList = {
    fields: {
        name: { type: Text },
        email: { type: Text, isRequired: true, isUnique: true },
        steamId: { type: Text },
        rank: {
            type: Relationship,
            ref: "Rank"
        },
        avatar: {
            type: Relationship,
            ref: "Avatar"
        },
        state: {
            type: Select,
            options: ["applicant", "member", "moderator", "admin"],
            defaultValue: "applicant",
            access: {
                update: access.userIsAdmin
            }
        },
        password: {
            type: Password,
            access: {
                read: access.userIsAdmin,
                update: access.userIsAdminOrOwner
            }
        },
        strikes: {
            type: Relationship,
            ref: "Strike",
            many: true
        },
        awards: {
            type: Relationship,
            ref: "Award",
            many: true
        },
        slot: {
            type: Relationship,
            ref: "Slot.user"
        }
    },
    // List-level access controls
    access: {
        read: access.userIsAdminOrOwner,
        update: access.userIsAdmin,
        create: true,
        delete: access.userIsAdmin,
        auth: true,
    },
};

module.exports = UserList;

