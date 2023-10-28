let myArray
let itemOut 

const removeFromArray = function(myArray, itemOut) {
return myArray.filter(item => !itemOut.includes(item));

};

let result = removeFromArray([1, 2, "john", 4, 5], "john")
console.log(result);




// Do not edit below this line
module.exports = removeFromArray;
