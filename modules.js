var fs = require('fs');
var yaml = require('js-yaml');
var path = require('path');

// var profile = yaml.safeLoad(fs.readFileSync('./profile.yml', 'utf8'));
// var message = profile.name + " is " + profile.age + " years old and likes ";
// message += profile.movies.join(" and ") + ".";
//
// fs.writeFileSync(path.join(".","profiles","mel-jones.txt"), message, "utf8");

fs.readFile('./profile.yml','utf8', function(err, file){
    if(err) {
        console.error(err);
        return;
    }
    var profile = yaml.safeLoad(file);
    var message = profile.name + " is " + profile.age + " years old and likes ";
    message += profile.movies.join(" and ") + ".";

    var filepath = path.join(".","profiles","mel-jones.txt");
    fs.writeFile(filepath, message, "utf8", function(err) {
        if(err) {
            console.error(err);
            return;
        }

        console.log("Profile for " + profile.name + " written to " + filepath);
    });
});
