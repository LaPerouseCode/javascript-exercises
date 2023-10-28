function sumAll(fromNumber, toNumber) {
    let i = fromNumber;
    let addition = 0;

    while (i <= toNumber) {
        addition += i;
        console.log(addition);
        i++;
    }

    return addition;
}

let result = sumAll(1, 4);
console.log("Final Result = " + result);

// Do not edit below this line
module.exports = sumAll;
