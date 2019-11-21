const calcLib = require('./src/calcLib.js');

const main = function() {
  const args = process.argv;
  const result = calcLib.evaluate(args);
  console.log(result);
};

main();
