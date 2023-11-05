let addition = 0;
const add = function(a, b) {
  return a + b;
};

let sub = 0;
const subtract = function(a, b) {
  return a - b;
};

let sumMyArray = [1, 4, 7]
let totalSum = 0;
const sum = function() {
  for (let i = 0; i < sumMyArray.length; i++) {
  totalSum += sumMyArray[i];
  }
};

let totalMul = sumMyArray[0];
const multiply = function() {
  for (let i = 0; i < sumMyArray.length; i++) {
    totalMul *= sumMyArray[i];
  }
};

const power = function(base, exponent) {
  return Math.pow(base, exponent);
};


let totalFact = 1;
const factorial = function(n) {
  for (let i = 1; i <= n; i++) {
    totalFact *= i;
  }
  return totalFact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
