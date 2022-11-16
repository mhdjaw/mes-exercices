const username: string = process.argv[2];

const splittedname: string [] = username.split(' ');
const thename: string = splittedname[0][0].toUpperCase();
const surname: string = splittedname[(splittedname.length - 1)][0].toUpperCase();
console.log(`${thename}.${surname}`);
