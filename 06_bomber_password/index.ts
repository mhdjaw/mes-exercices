const mychiffre:number = +process.argv[2];
const myanimal: string = process.argv[3];
let myresult: string = '';
let mytotal: string = '';
if (myanimal === 'dogs') {
  myresult = 'bark';
} else if (myanimal === 'cats') {
  myresult = 'meow';
} else if (myanimal === 'cows') {
  myresult = 'moo';
}
for (let i = 0; i < mychiffre; i += 1) {
  mytotal += myresult;
  if (i !== mychiffre - 1) {
    mytotal += ' ';
  } else {
    mytotal += '!';
  }
}
console.log(`${mytotal}`);
