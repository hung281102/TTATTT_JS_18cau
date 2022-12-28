//!  Viết chương trình liệt kê tất cả các số camichael nhỏ hơn hoặc bằng n nhập từ bàn phím

function GCD(a, b) {
    if (b == 0) return a;
    return GCD(b, a % b);
}

function isCamichaelNumber(n) {
    for (let i = 2; i < n; i++) {
        //! Nếu có ước chung lớn nhất với n = 1
        if (GCD(i, n) === 1) {
            //! i ^ n - 1 đồng dư với 1 mod n
            if (Math.pow(i, n - 1) % n === 1) {
                return true;
            }
        }
    }
    return false;
}

const n = 100;

for (let index = 0; index <= n; index++) {
    if (isCamichaelNumber(index)) {
        console.log(index);
    }
}
