const access = require("../../access");
const { File } = require("@keystonejs/fields");

const { LocalFileAdapter } = require("@keystonejs/file-adapters");

const FileAdapter = new LocalFileAdapter({
    src: "uploads/icons"
});

const IconList = {
    fields: {
        file: { type: File, adapter: FileAdapter, isRequired: true }
    },
    // List-level access controls
    access: {
        read: access.userIsAny,
        update: access.userIsAdmin,
        create: access.userIsAdmin,
        delete: access.userIsAdmin,
    },
};

module.exports = IconList;

