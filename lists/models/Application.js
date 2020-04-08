const access = require("../../access");
const { Text, Integer, Relationship, Checkbox, DateTime, Select } = require("@keystonejs/fields");

const userIsAdminOrOwner = ({ authentication: { item: user } }) => {
    if (!user) {
        return false
    }
    if (user.state === "admin") {
        return true;
    }
    return {
        user: {
            id: user.id
        }
    }
};

const ApplicationList = (keystone) => ({
    fields: {
        user: {type: Relationship, ref: "User", isRequired: true, isUnique: true },
        name: { type: Text, isRequired: true, isUnique: true },
        steam: { type: Text, isRequired: true, isUnique: true },
        dob: { type: DateTime, isRequired: true },
        country: { type: Text },
        interest: { type: Text },
        hours_exp: { type: Integer },
        referred_from: { type: Text},
        accept_attendance: { type: Checkbox, isRequired: true },
        read_rules: { type: Checkbox, isRequired: true },
        state: {
            type: Select,
            options: [ "pending", "accepted", "rejected" ],
            defaultValue: "pending",
            access: {
                update: access.userIsAdmin,
                create: access.userIsAdmin,
                delete: access.userIsAdmin
            }
        }
    },
    hooks: {
        afterChange: async ({existingItem, originalInput, updatedItem, actions: { query }}) => {
            if (existingItem.state === updatedItem.state || !originalInput.state || originalInput.state !== "accepted") {
                return;
            }
            const mutation = `
        mutation($userId: ID!, $name: String, $steam: String) {
          updateUser(id: $userId, data: { name: $name, state: member, steamId: $steam }) {
            id
          }
        }`;
            const variables = {
                userId: updatedItem.user.toString(),
                name: updatedItem.name,
                steam: updatedItem.steam
            };
            const { errors, data } = await query(mutation, { skipAccessControl: true, variables });
            console.log(errors, data);
        }
    },
    // List-level access controls
    access: {
        read: userIsAdminOrOwner,
        update: userIsAdminOrOwner,
        create: access.userIsAny,
        delete: access.userIsAdminOrOwner,
    }
});

module.exports = ApplicationList;

