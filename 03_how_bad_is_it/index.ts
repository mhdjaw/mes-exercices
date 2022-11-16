const arg = process.argv[2];
console.log(`The Great Fairy is missing ${Math.ceil((348 - parseInt(arg, 10)) / 3)} Stray Fairies.`);
if (((348 - parseInt(arg, 10)) / 3 < 10)) {
  console.log("It's not too bad yet, it shouldn't take too much time to heal her.");
} else if ((348 - parseInt(arg, 10)) / 3 >= 10 && (348 - parseInt(arg, 10)) / 3 <= 39) {
  console.log('Whoever did this to her was clearly playing some mischievous prank!');
} else if ((348 - parseInt(arg, 10)) / 3 >= 40 && (348 - parseInt(arg, 10)) / 3 <= 99) {
  console.log('She has been greatly damaged. We must save her as soon as possible!');
} else if ((348 - parseInt(arg, 10) / 3 > 90)) {
  console.log("What happened to her!? It's just awful!");
}
