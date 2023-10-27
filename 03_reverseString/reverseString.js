let sentence = "hello there";
let wordsArray = sentence.split("");
console.log(wordsArray);

let reversedArray = wordsArray.reverse();
console.log(reversedArray);

const reverseString = function(wordsArray) {
  let result = "";
  for (let i = 0; i < wordsArray.length; i++) {
    result = result + wordsArray[i] + "";
  }
  return result.trim(); 
};

let reversedString = reverseString(reversedArray);
console.log(reversedString); 


// Do not edit below this line
module.exports = reverseString;
