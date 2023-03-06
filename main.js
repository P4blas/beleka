const { ALL } = require('dns');
const fs = require('fs');

let pazymiai = [7, 2, 4, 3, 10];
let suma = 0;

fs.writeFileSync("pazymiai.json", JSON.stringify(pazymiai));

let tekstas = fs.readFileSync('pazymiai.json', {encoding: 'utf-8'});
let array = JSON.parse(tekstas);

for (let number of array) {
    suma += number;
}

console.log(array);
console.log(suma / pazymiai.length);