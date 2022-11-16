"use strict";
exports.__esModule = true;
function printArray(array) {
    console.log('list of destinations:');
    for (var i = 0; i < array.length; i += 1) {
        var myelement = array[i];
        console.log("".concat(i + 1, " - ").concat(myelement));
    }
}
exports["default"] = printArray;
printArray(['Dakar', 'Jaipour', 'Paris']);
