function createObject(name, description, hp) {
    var enemy = {
        name: name,
        description: description,
        hp: hp
    };
    return (enemy);
}
var enemy = createObject('Bad Bat', "It's a Bad Bat. If you don't do something before it swoops down on you...Well, just don't come running to me!", 20);
console.log("".concat(enemy.name, " : ").concat(enemy.hp, "hp"));
// Bad Bat: 20hp
console.log("".concat(enemy.name, " - ").concat(enemy.description));
// Bad Bat - It's a Bad Bat. If you don't do something before it swoops down on you...Well, just don't come running to me!
