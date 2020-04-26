const access = require("../../access");
const { Text, Integer, File } = require("@keystonejs/fields");

const { LocalFileAdapter } = require("@keystonejs/file-adapters");

const FileAdapter = new LocalFileAdapter({
    src: "public/uploads/icons/ranks",
    path: "/ranks"
});

const RankList = (keystone) => ({
        fields: {
            name: { type: Text },
            abbreviation: { type: Text },
            priority: { type: Integer },
            icon: { type: File, adapter: FileAdapter }
        },
        // List-level access controls
        access: {
            read: true,
            update: access.userIsAdmin,
            create: access.userIsAdmin,
            delete: access.userIsAdmin,
        }
});

module.exports = RankList;

