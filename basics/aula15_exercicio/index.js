let name = 'Bruno';
let surname = 'Zangirolami';
let age = 25;
let heightInMeters = 1.85;
let weightInKilograms = 110;
const indiceMassaCorporal = weightInKilograms / ( heightInMeters * heightInMeters )
const bornYear = new Date().getFullYear() - age;

console.log(name + ' ' + surname + ' tem ' + age + ' anos, pesa ' + weightInKilograms + 'kg');
console.log(`tem ${heightInMeters} de altura e seu IMC é ${indiceMassaCorporal}`); // template strings USAR CRASES
console.log(name, 'nasceu em', bornYear + '.');