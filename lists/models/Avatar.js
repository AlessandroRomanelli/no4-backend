const access = require("../../access");
const { File, Text } = require("@keystonejs/fields");

const { LocalFileAdapter } = require("@keystonejs/file-adapters");

const FileAdapter = new LocalFileAdapter({
    src: "public/uploads/avatars",
    path: "/avatars"
});

const AvatarList = (keystone) => ({
    fields: {
        description: { type: Text },
        file: { type: File, adapter: FileAdapter, isRequired: true }
    },
    // List-level access controls
    access: {
        read: access.userIsAny,
        update: access.userIsAdmin,
        create: access.userIsAdmin,
        delete: access.userIsAdmin,
    }
});

module.exports = AvatarList;

