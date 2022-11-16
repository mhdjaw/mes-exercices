"use strict";
exports.__esModule = true;
function searchRecipe(name, path) {
    var found = false;
    // eslint-disable-next-line import/no-dynamic-require, global-require
    var monfichier = require("./".concat(path));
    for (var i = 0; i < monfichier.length; i += 1) {
        if (name === monfichier[i].name) {
            found = true;
            console.log("==== ".concat(name, " ===="));
            for (var j = 0; j < monfichier[i].ingredients.length; j += 1) {
                console.log("- ".concat(monfichier[i].ingredients[j]));
            }
        }
    }
    if (found === false) {
        console.log('No match.');
    }
}
searchRecipe('Pumpkin Stew', 'hylian_cooking_for_dummies.json');
