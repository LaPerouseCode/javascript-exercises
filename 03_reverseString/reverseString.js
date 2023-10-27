let sentence = "hello there is this working";
let wordsArray = sentence.split("");
console.log(wordsArray);

let reversedArray = wordsArray.reverse();
console.log(reversedArray);

const reverseString = function(wordsArray) {
  let result = "";
  for (let i = 0; i < wordsArray.length; i++) {
    result = result + wordsArray[i] + "";
  }
  return result.trim(); // Use trim to remove the trailing space at the end
};

let reversedString = reverseString(reversedArray);
console.log(reversedString); // Output: "there hello"



// Do not edit below this line
module.exports = reverseString;
