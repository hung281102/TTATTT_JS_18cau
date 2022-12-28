//! Tìm thừa số không tầm thường của n
var d,
    a = 2,
    b = 2;

function GCD(a, b) {
    if (b == 0) return a;
    return GCD(b, a % b);
}

function Pollards_Rho(n) {
    for (let index = 1; ; index++) {
        a = (Math.pow(a, 2) + 1) % n;
        b = (Math.pow(b, 2) + 1) % n;
        b = (Math.pow(b, 2) + 1) % n;
        // console.log("a = ", a);
        // console.log("b = ", b);

        d = GCD(a - b, n);
        // console.log("d = ", d);
        if (1 < d && d < n) {
            return { d, state: "Thanh Cong" };
        }
        if (d === n) {
            return { state: "That bai" };
        }
    }
}

console.log(Pollards_Rho(43567127));
