const access = require("../../access");
const { Text, Relationship, Integer } = require("@keystonejs/fields");

const querySection = `
query($sectionId: ID!) {
    Section(where: { id: $sectionId }) {
        name
    }
}`;

const GroupList = (keystone) => ({
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
        },
        order: {
            type: Integer
        }
    },
    labelResolver: async (group) => {
        const { data } = await keystone.executeQuery(querySection, {
            variables: {
                sectionId: group.section.toString()
            }
        });
        return `${data.Section.name}/${group.name}`
    },
    // List-level access controls
    access: {
        read: true,
        update: access.userIsAdmin,
        create: access.userIsAdmin,
        delete: access.userIsAdmin,
    }
});

module.exports = GroupList;

