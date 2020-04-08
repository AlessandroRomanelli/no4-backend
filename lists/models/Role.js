const access = require("../../access");
const { Text } = require("@keystonejs/fields");

const RoleList = (keystone) => ({
        fields: {
            name: { type: Text },
            description: { type: Text }
        },
        // List-level access controls
        access: {
            read: true,
            update: access.userIsAdmin,
            create: access.userIsAdmin,
            delete: access.userIsAdmin,
        }
});

module.exports = RoleList;

