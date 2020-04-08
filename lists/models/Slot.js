const access = require("../../access");
const { Relationship, Checkbox, Integer } = require("@keystonejs/fields");

const queryGroupAndRole = `
query($groupId: ID!, $roleId: ID!) {
    Group(where: {id: $groupId}) {
        name
    }
    Role(where: {id: $roleId}) {
        name
    }
}`;

const SlotList = (keystone) => ({
    fields: {
        role: { type: Relationship, ref: "Role", required: true },
        user: { type: Relationship, ref: "User.slot" },
        isOpen: { type: Checkbox, defaultValue: true },
        isReserve: { type: Checkbox, defaultValue: false },
        group: { type: Relationship, ref: "Group.slots"},
        order: { type: Integer }
    },
    labelResolver: async (slot) => {
        const { data } = await keystone.executeQuery(queryGroupAndRole, {
            variables: {
                groupId: slot.group.toString(),
                roleId: slot.role.toString()
            }
        });
        const groupName = data.Group ? data.Group.name : "Unassigned";
        const roleName = data.Role ? data.Role.name : "No Role";
        return `${groupName}/${roleName}${slot.isReserve ? " (Reserve)" : ""}`;
    },
    // List-level access controls
    access: {
        read: true,
        update: access.userIsAdmin,
        create: access.userIsAdmin,
        delete: access.userIsAdmin,
    }
});

module.exports = SlotList;

