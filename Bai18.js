//!Thuật toán vét cạn tìm chuỗi con

const T = "antoan",
    P = "toan";

function Brute_Force(t, p) {
    let i = 0,
        j = 0,
        count = 0;

    while (i <= t.length - 1) {
        if (p[j] === t[i]) {
            if (j === p.length - 1) {
                return {
                    viTri: i,
                    count: count,
                };
            } else {
                i++;
                j++;
            }
        } else {
            i++;
            j = 0;
        }
        count++;
    }
    return {
        viTri: -1,
        count: count,
    };
}
console.log(Brute_Force(T, P));
