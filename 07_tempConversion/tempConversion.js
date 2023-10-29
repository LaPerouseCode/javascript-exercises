let inputFahrenheit;
const convertToCelsius = function(inputFahrenheit) {
return Math.round((inputFahrenheit - 32)*(5/9)*10)/10;
};
let C = convertToCelsius(100);
console.log(C);

let inputCelsius;
const convertToFahrenheit = function(inputCelsius) {
return Math.round((inputCelsius * 9/5 + 32)*10)/10;
};
let F = convertToFahrenheit(35.5887777778);
console.log(F);



// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
