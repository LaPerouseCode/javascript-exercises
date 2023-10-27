let sentence = "hello there";
let wordsArray = sentence.split(" ");
console.log(wordsArray);

let reversedArray = wordsArray.reverse();
console.log(reversedArray);

const reverseString = function(wordsArray) {
  let result = "";
  for (let i = 0; i < wordsArray.length; i++) {
    result = wordsArray[i] + " " + result;
  }
  return result;
};


let reversedString = reverseString(wordsArray).slice(0, -1);
console.log(reversedString); 

// Do not edit below this line
module.exports = reverseString;
