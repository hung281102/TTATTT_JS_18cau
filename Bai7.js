//! Tinh uoc chung lon nhat hai so ab

const a = 28150488,
    b = 10507620;
function UCLN(a, b) {
    let tmp;
    if (a === b) return a;
    while (b != 0) {
        tmp = a % b;
        a = b;
        b = tmp;
    }
    return a;
}

function UCLN2(a, b) {
    if (b == 0) return a;
    return UCLN2(b, a % b);
}

console.log(UCLN2(a, b));
