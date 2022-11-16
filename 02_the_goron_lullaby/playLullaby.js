"use strict";
exports.__esModule = true;
var jasondata = require('./lullaby.json');
function playLullaby() {
    if (jasondata.names === 'Gororn Lullaby') {
        console.log('Goron Lullaby');
        console.log("".concat(jasondata.notes.join('')));
        return true;
    }
    console.log('This is not the Goron Lullaby.');
    return false;
}
exports["default"] = playLullaby();
