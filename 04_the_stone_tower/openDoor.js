"use strict";
exports.__esModule = true;
var readline = require('readline-sync');
function openDoor() {
    var answer = readline.question('Who are you?');
    if (answer === 'Link') {
        console.log('Welcome Hero.');
        return true;
    }
    console.log('You are not welcome here. Leave.');
}
exports["default"] = openDoor();
