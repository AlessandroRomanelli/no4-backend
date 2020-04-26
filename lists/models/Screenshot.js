const access = require("../../access");
const { Text, File } = require("@keystonejs/fields");

const { LocalFileAdapter } = require("@keystonejs/file-adapters");

const FileAdapter = new LocalFileAdapter({
    src: "public/uploads/screenshots",
    path: "/screenshots"
});

const ScreenshotList = (keystone) => ({
        fields: {
            title: { type: Text, isRequired: true },
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

module.exports = ScreenshotList;

