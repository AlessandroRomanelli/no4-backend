const access = require("../../access");
const { Text, Integer, Relationship, Checkbox, DateTime } = require("@keystonejs/fields");

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

const ApplicationList = {
    fields: {
        user: {type: Relationship, ref: "User", isRequired: true, isUnique: true },
        name: { type: Text, isRequired: true },
        steam: { type: Text, isRequired: true },
        dob: { type: DateTime, isRequired: true },
        country: { type: Text },
        preferred_role: { type: Relationship, ref: "Role" },
        interest: { type: Text, isRequired: true },
        hours_exp: { type: Integer },
        referred_from: { type: Text},
        accept_attendance: { type: Checkbox, isRequired: true },
        read_rules: { type: Checkbox, isRequired: true },
    },
    // List-level access controls
    access: {
        read: userIsAdminOrOwner,
        update: userIsAdminOrOwner,
        create: access.userIsAny,
        delete: access.userIsAdminOrOwner,
    }
};

module.exports = ApplicationList;

