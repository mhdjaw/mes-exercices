const jasondata = require('./lullaby.json');

function playLullaby() {
  if (jasondata.names === 'Gororn Lullaby') {
    console.log('Goron Lullaby');
    console.log(`${jasondata.notes.join('')}`);
    return true;
  }
  console.log('This is not the Goron Lullaby.');
  return false;
}
// playLullaby();
export default playLullaby;
