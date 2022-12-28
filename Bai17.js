//! Cài đặt thuật toán tìm kiếm mẫu P trong đoạn văn bản T kết quả trả về vị trí xuất hiện của mẫu P và số lần lặp tính toán,
//! số phép tính theo Knuth-Moris-Pratt với P và T nhập vào từ bàn phím

let T = "abacaabaccabacabaabb",
    P = "abacab";
// let T = "GATCGATCACATCATCACGAAAAA",
//     P = "ATCACATCATCA";

//! Tiền tố
function Proper_Prefixes(s) {
    let result = [];
    let start = 0,
        end = 1;
    while (end <= s.length) {
        result.push(s.substr(start, end));
        end++;
    }
    return result;
}

console.log("Proper_Prefixes = ", Proper_Prefixes(P));
//! Hậu tố
function Proper_Suffixes(s) {
    let result = [];
    let start = 0,
        end = s.length;
    while (start <= s.length - 1) {
        result.push(s.substr(start, end));
        start++;
    }
    return result;
}

console.log("Proper_Suffixes = ", Proper_Suffixes(P));

//! Tính hàm failure function
function Failure_Function(p) {
    let result = new Array().fill(0);

    let subPrefixes;
    let subSuffixes;

    //! Với j =  0; F(j) = -1

    result[0] = -1;

    for (let j = 1; j <= p.length - 1; j++) {
        subPrefixes = p.substr(0, j);
        subSuffixes = p.substr(1, j - 1);

        // console.log("subPrefixes: " + subPrefixes);
        // console.log("subSuffixes: " + subSuffixes);

        for (let i = Proper_Prefixes(subPrefixes).length - 1; i >= 0; i--) {
            if (
                Proper_Suffixes(subSuffixes).includes(
                    Proper_Prefixes(subPrefixes)[i]
                )
            ) {
                result[j] = Proper_Prefixes(subPrefixes)[i].length;
                break;
            } else {
                result[j] = 0;
            }
        }
    }

    return result;
}

console.log("Failure_Function = ", Failure_Function(P));
// ![-1, 0, 0, 1, 0, 1];

function Knuth_Morris_Pratt(t, p) {
    //! i chạy theo chuỗi T
    let i = 0;
    //! j chạy theo chuỗi P
    let j = 0;

    let count = 0;

    while (i <= t.length - 1) {
        if (p[j] === t[i + j]) {
            if (j === p.length - 1) {
                return {
                    viTri: i,
                    count: count,
                };
            } else {
                j = j + 1;
            }
        } else {
            let F = Failure_Function(p);
            // console.log("i = ", i);
            // console.log("j = ", j);
            // console.log("F[j] = ", F[j]);

            i = i + j - F[j];

            if (F[j] === -1) {
                j = 0;
            } else {
                j = F[j];
            }
        }
        count++;
    }
    return {
        viTri: -1,
        count: count,
    };
}

console.log(Knuth_Morris_Pratt(T, P));
