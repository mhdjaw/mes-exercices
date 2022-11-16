"use strict";
exports.__esModule = true;
function printEnemies(array) {
    var myname = ['evil', 'bad', 'mean', 'rotten', 'cruel'];
    for (var j = 0; j < array.length; j += 1) {
        array[j] = array[j].toLowerCase();
        for (var i = 0; i < myname.length; i += 1) {
            if (array[j].includes(myname[i])) {
                console.log("".concat(array[j].replace(' ', '_')));
            }
        }
    }
}
exports["default"] = printEnemies;
printEnemies(process.argv[2].split(':'));
