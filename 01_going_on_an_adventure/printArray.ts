function printArray(array: string[]) {
  console.log('List of destinations:');
  for (let i:number = 0; i < array.length; i += 1) {
    const myelement: string = array[i];
    console.log(`${i + 1} - ${myelement}`);
  }
}
export default printArray;
