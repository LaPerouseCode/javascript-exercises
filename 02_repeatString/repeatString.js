//let userWordInput = prompt("Give me a word");
//let userNumberInput = parseInt(prompt("Give me a number"));

const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR";
    }
    let result = ''; // Initialize an empty string to store the concatenated result
    for (let i = 0; i < num; i++) {
        result += string; // Concatenate the input string with the result string
    }
    return result; // Return the concatenated result
};

let repeatedString = repeatString('hey', 3);
console.log(repeatedString); // Output: heyheyhey


// Do not edit below this line
module.exports = repeatString;
