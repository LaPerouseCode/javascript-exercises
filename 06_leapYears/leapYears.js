const leapYears = function(chosenYear) {
    let n = chosenYear;

    if ((n % 4 === 0 && n % 100 !== 0) || (n % 400 === 0)) {
        return true;
    } else {
        return false;
    }
};
let V = leapYears(1985);
console.log(V);

// Do not edit below this line
module.exports = leapYears;
