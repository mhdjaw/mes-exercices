import getMasks from './resource';

function displayMasks() {
  const mask = getMasks();
  let str:string = mask[0];
  for (let i: number = 1; i < mask.length; i += 1) {
    str = str.concat(', ', mask[i]);
  }
  console.log(str);
}
// displaMasks();
export default displayMasks;
