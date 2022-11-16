import Recipe from './Recipe';

let mypath: Recipe;
export function recup(path: string) {
  const js = '';
  const myjs = js.concat(path);
  // eslint-disable-next-line import/no-dynamic-require, global-require
  mypath = require(myjs);
}

export default function displayRecipe(path: string) {
  recup(path);
  console.log(`==== ${mypath.name} ====`);
  for (let i: number = 0; i < mypath.ingredients.length; i += 1) {
    console.log(`- ${mypath.ingredients[i]}`);
  }
}
