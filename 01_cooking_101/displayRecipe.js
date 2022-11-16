"use strict";
exports.__esModule = true;
// import * as recipe from './recipe.json';
var mypath;
function recup(path) {
    var js = './';
    var myjs = js.concat(path);
    mypath = require(myjs);
}
function displayRecipe(path) {
    recup(path);
    console.log("==== ".concat(mypath.name, " ===="));
    for (var i = 0; i < mypath.ingredients.length; i += 1) {
        console.log("- ".concat(mypath.ingredients[i]));
    }
}
exports["default"] = displayRecipe;
