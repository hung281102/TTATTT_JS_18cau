//! Viết chương trình tìm tất cả các số nguyên tố nhỏ hơn bằng n

function checkNum(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

function printPrimeNumber(n) {
    let result = [];
    for (let index = 0; index <= n; index++) {
        if (checkNum(index)) {
            result.push(index);
        }
    }
    return result;
}

console.log(printPrimeNumber(30));
