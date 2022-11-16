const readline = require('readline-sync');

function openDoor() {
  const answer = readline.question('Who are you?');
  if (answer === 'Link') {
    console.log('Welcome Hero.');
    return true;
  }

  console.log('You are not welcome here. Leave.');
  return false;
}
export default openDoor();
