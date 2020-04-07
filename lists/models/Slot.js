const access = require("../../access");
const { Relationship, Checkbox, Integer } = require("@keystonejs/fields");

const SlotList = {
    fields: {
        role: { type: Relationship, ref: "Role", required: true },
        user: { type: Relationship, ref: "User.slot" },
        isOpen: { type: Checkbox, defaultValue: true },
        group: { type: Relationship, ref: "Group.slots"},
        order: { type: Integer }
    },
    // List-level access controls
    access: {
        read: true,
        update: access.userIsAdmin,
        create: access.userIsAdmin,
        delete: access.userIsAdmin,
    },
};

module.exports = SlotList;

