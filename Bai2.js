//! Tổng hai số
const a = 38762497,
    b = 568424364,
    p = 2147483647,
    W = 8;

var x, e, tmp, tmp1;

var A = [],
    B = [],
    POW = [];

const m = Math.ceil(Math.log2(p));
const t = Math.ceil(m / W);

for (let i = t - 1; i >= 0; i--) {
    POW[i] = Math.pow(2, W * i);
}

//! Chuyển số sang ma trận
function intToArr(a, t, x, POW, arr) {
    for (let i = t - 1; i >= 0; i--) {
        x = Math.floor(a / POW[i]);
        a = a % POW[i];
        arr[i] = x;
    }
    return arr.reverse();
}

//! Tính tổng

function Multiprecision_Addition(arr1, arr2, t) {
    tmp = Math.pow(2, W);
    e = 0;
    let arr3 = [];
    for (let i = t - 1; i >= 0; i--) {
        tmp1 = arr1[i] + arr2[i] + e;

        if (0 <= tmp1 && tmp1 < tmp) {
            e = 0;
        } else {
            e = 1;
        }
        console.log("e = ", e);
        arr3[i] = tmp1 % tmp;
        // console.log("i = ", i, "arr3[i] = ", arr3[i]);
    }

    return { e, arr3 };
}

//! Chạy

A = intToArr(a, t, x, POW, A);
B = intToArr(b, t, x, POW, B);
console.log(A, B);

console.log(Multiprecision_Addition(A, B, t));

console.log(Multiprecision_Addition([0, 11, 173, 248], [0, 1, 226, 64], t));

// console.log(arrayToInt([70, 1, 173, 87], t));
