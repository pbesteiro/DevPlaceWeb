var fs = require("fs");
var onlyScripts = require("./utils/scriptFilter");
var tasks = fs.readdirSync("./gulp/tasks/").filter(onlyScripts);
global.themePath = "./src/";

tasks.forEach(function (task) {
  require("./tasks/" + task);
});
