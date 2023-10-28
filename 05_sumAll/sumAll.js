function sumAll(fromNumber, toNumber) {
    if (fromNumber < 0 || toNumber < 0) {
        console.log('ERROR');
        return 'ERROR';
    } else if (typeof fromNumber !== 'number' || typeof toNumber !== 'number') {
            console.log('ERROR');
            return 'ERROR';
    }
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

let result = sumAll(1, -4); // Example with a negative number
console.log("Final Result = " + result);
// Do not edit below this line
module.exports = sumAll;
