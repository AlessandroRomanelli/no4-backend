const fs = require("fs");

const modelNames = fs.readdirSync("./lists/models").map(x => x.split(".js").shift());
console.log(modelNames);

module.exports = function(keystone) {
    modelNames.forEach(name => {
        const List = require("./models/"+name)(keystone);
        keystone.createList(name, List);
    });
};