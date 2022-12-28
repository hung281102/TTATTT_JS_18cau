//! Cài đặt thuật toán tìm kiếm mẫu P trong đoạn văn bản T kết quả trả về vị trí xuất hiện của mẫu P và số lần lặp tính toán,
//! số phép tính theo Boyer Moore với P và T nhập vào từ bàn phím

let T = "this place it was brighter than tomorrow",
    P = "is peace";

//! Tìm vị trí xuất hiện đầu tiên của một phần tử trong chuỗi
function charInString(s, c) {
    for (let i = 0; i < s.length; i++) {
        if (s[i] === c) {
            return s.length - 1 - i;
        }
    }
    return -1;
}
// var s = "hungphucc";
// console.log(reverseString(s));
// console.log(charInString(s.split("").reverse().join(""), "c"));

function Last_Occurrence(string, P) {
    //! Mảng các kí tự của mẫu
    let a = [];
    a.push(string[0]);
    for (let i = 1; i < string.length; i++) {
        if (!a.includes(string[i])) {
            a.push(string[i]);
        }
    }
    // console.log(a);
    //! Mảng vị trí cuối (lần xuất hiện cuối của kí tự T trong P)
    let L = [];
    for (let i = 0; i < a.length; i++) {
        let tmp = charInString(P.split("").reverse().join(""), a[i]);
        L.push(tmp);
    }
    let result = {};
    a.map((item, index) => {
        return (result[item] = L[index]);
    });
    return result;
}

var Last_Occurrence_Table = Last_Occurrence(T, P);

//! Bảng x, L(x)
console.log(Last_Occurrence_Table);

//!Boyer_Moore

function Boyer_Moore(t, p) {
    let i = p.length - 1;
    let j = p.length - 1;
    let count = 0;

    while (i <= t.length) {
        if (t[i] === p[j]) {
            if (j === 0) {
                return {
                    viTri: i,
                    count: count,
                };
            } else {
                i = i - 1;
                j = j - 1;
            }
        } else {
            let l = Last_Occurrence_Table[t[i]];

            i = i + p.length - Math.min(j, 1 + l);

            j = p.length - 1;
        }
        count++;
    }

    return {
        viTri: -1,
        count: count,
    };
}

console.log(Boyer_Moore(T.split(""), P.split("")));
