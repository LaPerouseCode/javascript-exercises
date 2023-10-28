let myArray
let itemOut 
const removeFromArray = function(myArray, itemOut) {
if (Array.isArray(itemOut)) {
return myArray.filter(item => !itemOut.includes(item));
} else { return myArray.filter(item => item !==itemOut);}
}
let result = removeFromArray([1, 2, "john", 4, 5], [2, 3, "john"])
console.log(result);


// Do not edit below this line
module.exports = removeFromArray;
