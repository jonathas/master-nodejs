var fs = require('fs');
var yaml = require('js-yaml');

var profile = yaml.safeLoad(fs.readFileSync('./profile.yml', 'utf8'));
var message = profile.name + " is " + profile.age + " years old and likes ";
message += profile.movies.join(" and ") + ".";

fs.writeFileSync("./profiles/mel-jones.txt", message, "utf8");
