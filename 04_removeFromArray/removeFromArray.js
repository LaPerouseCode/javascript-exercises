let myArray
let itemOut 
let itemOut2
let itemOut3
let itemOut4
let itemOut5
let itemOut6
let itemOut7
let itemOut8
const removeFromArray = function(myArray, itemOut, itemOut2) {
    if (Array.isArray(itemOut)) {
        return myArray.filter(item => !itemOut.includes(item));
    } else {
        return myArray.filter(item => item !== itemOut && item !== itemOut2 && item !== itemOut3 && item !== itemOut4 && item !== itemOut5 && item !== itemOut6 && item !== itemOut7 && item !== itemOut8);
    }
};

let result = removeFromArray([1, 2, "john", 4, 5], [2, 3, "john"], "tacos");
console.log(result);

// Do not edit below this line
module.exports = removeFromArray;
