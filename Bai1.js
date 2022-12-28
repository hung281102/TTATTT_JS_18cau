//! Biểu diễn số a thành ma trận

// const a = 38762497,
//     b = 568424364,
//     p = 2147483647,
//     W = 8;

const a = 2147483646,
    b = 2147483643,
    p = 2147483647,
    W = 8;

const m = Math.ceil(Math.log2(p));
const t = Math.ceil(m / W);

var A = [],
    B = [],
    POW = [];

for (let i = t - 1; i >= 0; i--) {
    POW[i] = Math.pow(2, W * i);
}

function intToArr(a, t, POW, arr) {
    let x;
    for (let i = t - 1; i >= 0; i--) {
        x = Math.floor(a / POW[i]);
        a = a % POW[i];
        arr[i] = x;
    }
    return arr.reverse();
}

console.log(intToArr(a, t, POW, A));
console.log(intToArr(b, t, POW, B));
