//!. Viết chương trình kểm tra một số n nhập từbàn phím có phải là một số camichael hay không?

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
//! n=561 -> số camichael
//! N=22 -> Không phải camichael

console.log(isCamichaelNumber(22));
