function readObject(monster) {
    console.log("".concat(monster.myname, " (").concat(monster.hp, "hp): ").concat(monster.description));
}
var monster = {
    myname: 'Deku Baba',
    hp: 10,
    description: "Don't tell me you don't know about the Deku Baba! Cut it down when it has extended its body and Deku Nuts or Sticks will come out."
};
readObject(monster);
