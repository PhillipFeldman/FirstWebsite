const xyz = require('./people');//automatically runs the script from people.js--this is why the array is printed immediately.
console.log(xyz)
const {peoples} = require('./people');
console.log(peoples[0]);

const os = require('os');

console.log(os.platform(), os.homedir());
