//Given two integers, a and b, return true if a can be divided evenly by b. Return false otherwise.


function divEvenly(a, b) {
    if (a % b === 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(divEvenly(98, 7));
console.log(divEvenly(85, 4));