let myArray
let itemOut 
let itemOut2
const removeFromArray = function(myArray, itemOut, itemOut2) {
    if (Array.isArray(itemOut)) {
        return myArray.filter(item => !itemOut.includes(item));
    } else {
        return myArray.filter(item => item !== itemOut && item !== itemOut2);
    }
};

let result = removeFromArray([1, 2, "john", 4, 5], [2, 3, "john"], "tacos");
console.log(result);

// Do not edit below this line
module.exports = removeFromArray;
