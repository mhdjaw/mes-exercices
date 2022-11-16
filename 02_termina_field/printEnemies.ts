function printEnemies(array: string[]) {
  const myname: string[] = ['evil', 'bad', 'mean', 'rotten', 'cruel'];
  for (let j: number = 0; j < array.length; j += 1) {
    array[j] = array[j].toLowerCase();
    for (let i: number = 0; i < myname.length; i += 1) {
      if (array[j].includes(myname[i])) {
        console.log(`${array[j].replace(' ', '_')}`);
      }
    }
  }
}
export default printEnemies;
