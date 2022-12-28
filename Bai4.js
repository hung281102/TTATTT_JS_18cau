//! Cộng trên Fp
const a = 2147483646,
    b = 2147483643,
    p = 2147483647,
    W = 8;

var x, e, tmp, tmp1;

var A = [],
    B = [],
    POW = [],
    P2 = [];

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
//! Chuyển ma trận sang số
function arrayToInt(arr, t) {
    // console.log(arr);
    var result = 0;
    for (let i = t - 1; i >= 0; i--) {
        result += arr[t - i - 1] * Math.pow(2, W * i);
        // console.log(arr[t - i - 1], result, Math.pow(2, W * i));
    }
    return result;
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
        // console.log("e = ", e);
        arr3[i] = tmp1 % tmp;
        // console.log("i = ", i, "arr3[i] = ", arr3[i]);
    }

    return { e, arr3 };
}
//! Tính hiệu
function Multiprecision_Subtraction(arr1, arr2, t) {
    tmp = Math.pow(2, W);
    e = 0;
    let arr3 = [];
    for (let i = t - 1; i >= 0; i--) {
        tmp1 = arr1[i] - arr2[i] - e;

        if (0 <= tmp1 && tmp1 < tmp) {
            e = 0;
        } else {
            e = 1;
        }

        if (tmp1 < 0) tmp1 += tmp;
        // console.log("e = ", e);
        arr3[i] = tmp1 % tmp;
        // console.log("i = ", i, "arr3[i] = ", arr3[i]);
    }

    return { e, arr3 };
}

//! Addition in Fp

function Addition_Fp(arr1, arr2, t) {
    //! Chuyen P sang Ma tran

    let C1 = Multiprecision_Addition(arr1, arr2, t);
    // console.log("C1 = ", C1);

    let c1 = arrayToInt(C1.arr3, t);

    let p1 = intToArr(p, t, x, POW, P2);

    if (C1.e === 0) {
        if (c1 < p) {
            return C1.arr3;
        } else {
            return Multiprecision_Subtraction(C1.arr3, p1, t);
        }
    } else {
        return Multiprecision_Subtraction(C1.arr3, p1, t);
    }
}
//! Chạy
A = intToArr(a, t, x, POW, A);
B = intToArr(b, t, x, POW, B);
// console.log(A, B);

// console.log(Multiprecision_Addition(A, B, t));

// console.log("KQ: ", Addition_Fp(A, B, t));
console.log("KQ: ", Addition_Fp([157, 0, 173, 23], [169, 1, 0, 64], t));
