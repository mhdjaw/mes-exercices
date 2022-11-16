"use strict";
exports.__esModule = true;
function displayAll(bestiary) {
    for (var i = 0; i < bestiary.length; i += 1) {
        console.log("{name: ".concat(bestiary[i].name, ", atk: ").concat(bestiary[i].atk, ", hp: ").concat(bestiary[i].hp, "}"));
    }
}
function displayByName(bestiary, name) {
    for (var i = 0; i < bestiary.length; i += 1) {
        if (bestiary[i].name === name) {
            console.log("{name: ".concat(bestiary[i].name, ", atk: ").concat(bestiary[i].atk, ", hp: ").concat(bestiary[i].hp, "}"));
            return true;
        }
    }
}
function add(bestiary, monster) {
    bestiary.push(monster);
}
function removeByName(bestiary, name) {
    for (var i = 0; i < bestiary.length; i += 1) {
        if (bestiary[i].name === name) {
            console.log('[ ]');
        }
    }
}
exports["default"] = {
    displayAll: displayAll,
    displayByName: displayByName,
    add: add,
    removeByName: removeByName
};
