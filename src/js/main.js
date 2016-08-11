var alertstars = require('./lib/alertstars');
var _ = require('underscore');
var $ = require('jquery');

window.onload = function() {
    var messages = [
        "Welcome!",
        "This is my new page!",
        "Do you like it?",
        "I guess you couldn't answer, huh?"
    ];

    //_.each(messages, alertstars);
    _.each(messages, function(message) {
        $("body").append("Test: " + message);
    });
};
