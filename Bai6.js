//! Tính phép nhân

const a = 524647,
    b = 32549,
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
// function binToDec(bin) {}
function decToBin(dec) {
    let binary = [];

    while (dec > 0) {
        let r = dec % 2;
        binary.push(r);
        dec = Math.floor(dec / 2);
    }

    while (binary.length < 16) {
        binary.push(0);
    }
    return binary;
}

function binToDec(bin) {
    let result = 0;
    for (let i = bin.length - 1; i >= 0; i--) {
        result += bin[i] * Math.pow(2, bin.length - 1 - i);
    }
    return result;
}
//! Phép tính nhân
function Integer_Multiprecision(arr1, arr2, t) {
    let arr3 = [];
    for (let i = 0; i <= t - 1; i++) {
        arr3[i] = 0;
    }
    for (let i = 0; i <= t - 1; i++) {
        let U = 0;
        console.log("i = ", i);
        for (let j = 0; j <= t - 1; j++) {
            let UV = arr3[i + j] + arr1[i] * arr2[j] + U;
            console.log("UV", UV);
            //!Chuyển UV -> Hệ 2
            let bin = decToBin(UV).reverse();
            let bitDau = bin.slice(0, 8); //! Dạng mảng
            let bitSau = bin.slice(8, 16); //! Dạng mảng
            U = binToDec(bitDau);
            V = binToDec(bitSau);
            console.log("j = ", j);
            console.log("U = ", U, "V = ", V);
            arr3[i + j] = V;
        }
        arr3[i + t] = U;
    }

    return arr3.reverse();
}

// console.log(decToBin(15872).reverse().join(""));
// var bin = decToBin(15872).reverse();
// console.log(bin);

// var bitDau = bin.slice(0, 8);
// var bitSau = bin.slice(8, 16);

// console.log("8 Bit dau: ", bitDau);
// console.log("8 Bit sau: ", bitSau);
// console.log(binToDec([0, 0, 1, 1, 1, 1, 1, 0]));

var A = intToArr(a, t, x, POW, A);
var B = intToArr(b, t, x, POW, B);
console.log(A, B);

console.log("KQ: C = ", Integer_Multiprecision(A.reverse(), B.reverse(), t));
