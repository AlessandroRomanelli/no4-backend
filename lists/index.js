const fs = require("fs");

const modelNames = fs.readdirSync("./lists/models").map(x => x.split(".js").shift());
console.log(modelNames);

module.exports = function(keystone) {
    modelNames.forEach(name => keystone.createList(name, require("./models/"+name)));
};