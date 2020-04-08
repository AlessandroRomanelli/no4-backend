const access = require("../../access");
const { Text, Relationship, Integer } = require("@keystonejs/fields");

const SectionList = (keystone) => ({
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
            },
            order: {
                type: Integer
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

module.exports = SectionList;

