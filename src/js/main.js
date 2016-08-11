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
    // Underscore is good for cross-browser compatibility
    _.each(messages, function(message) {
        $("body").append("Test: " + message);
    });
};
