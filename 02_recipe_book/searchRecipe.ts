import Recipe from './Recipe';

export default function searchRecipe(name: string, path: string) {
  let found: boolean = false;
  // eslint-disable-next-line import/no-dynamic-require, global-require
  const monfichier:Recipe[] = require(`${path}`);
  for (let i: number = 0; i < monfichier.length; i += 1) {
    if (name === monfichier[i].name) {
      found = true;
      console.log(`==== ${name} ====`);
      for (let j: number = 0; j < monfichier[i].ingredients.length; j += 1) {
        console.log(`- ${monfichier[i].ingredients[j]}`);
      }
    }
  }
  if (found === false) { console.log('No match.'); }
}
