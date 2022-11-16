import Monster from './Monster';

function displayAll(bestiary: Monster[]) {
  for (let i: number = 0; i < bestiary.length; i += 1) {
    console.log(`{name: ${bestiary[i].name}, atk: ${bestiary[i].atk}, hp: ${bestiary[i].hp}}`);
  }
}
function displayByName(bestiary: Monster[], name: string) {
  for (let i: number = 0; i < bestiary.length; i += 1) {
    if (bestiary[i].name === name) {
      console.log(`{name: ${bestiary[i].name}, atk: ${bestiary[i].atk}, hp: ${bestiary[i].hp}}`);
      return true;
    }
  }
}
function add(bestiary: Monster[], monster: Monster) {
  bestiary.push(monster);
}
function removeByName(bestiary: Monster[], name: string) {
  for (let i: number = 0; i < bestiary.length; i += 1) {
    if (bestiary[i].name === name) {
      console.log('[ ]');
    }
  }
}
export default {
  displayAll, displayByName, add, removeByName,
};
