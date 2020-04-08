const access = require("../../access");
const { Text, Relationship } = require("@keystonejs/fields");

const UnitList = (keystone) => ({
        fields: {
            name: { type: Text, isRequired: true },
            description: { type: Text },
            sections: {
                type: Relationship,
                ref: "Section.unit",
                many: true
            }
        },
        // List-level access controls
        access: {
            read: true,
            update: access.userIsAdmin,
            create: access.userIsAdmin,
            delete: access.userIsAdmin,
        }
});

module.exports = UnitList;

