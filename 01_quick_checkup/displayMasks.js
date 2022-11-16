"use strict";
exports.__esModule = true;
var resource_1 = require("./resource");
function displayMasks() {
    var mask = (0, resource_1["default"])();
    var str = mask[0];
    for (var i = 1; i < mask.length; i += 1) {
        str = str.concat(', ', mask[i]);
    }
    console.log(str);
}
exports["default"] = displayMasks();
