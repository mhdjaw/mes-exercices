const arg0 = +process.argv[2];
const arg1 = +process.argv[3];
let total: number = arg0;
for (let j: number = 1; j <= arg1; j += 1) {
  total += total * 0.04;
}
console.log(`You will earn ${(total - arg0).toFixed(2)} rupees after ${arg1} day${arg1 === 1 ? '' : 's'}.`);
