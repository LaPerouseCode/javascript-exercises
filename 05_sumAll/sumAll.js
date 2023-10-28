function sumAll(fromNumber, toNumber) {
    let i = Math.min(fromNumber, toNumber);
    let end = Math.max(fromNumber, toNumber);
    let addition = 0;

    while (i <= end) {
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
