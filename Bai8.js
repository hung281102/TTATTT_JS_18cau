//! Nghịch đảo trên Fp dùng Eculide mở rộng
const b = 489573857,
    a = 45682375;

var x1, x2, y1, y2, x, y;
function Eculide(a, b) {
    let d;
    if (b == 0) {
        d = a;
        x = 1;
        y = 0;
        return { d, x, y };
    } else {
        (x1 = 0), (x2 = 1), (y1 = 1), (y2 = 0);
        while (b > 0) {
            let q = Math.floor(a / b);
            let r = a - q * b;
            x = x2 - q * x1;
            y = y2 - q * y1;
            a = b;
            b = r;
            x2 = x1;
            x1 = x;
            y2 = y1;
            y1 = y;
        }
        d = a;
        x = x2;
        y = y2;
        return { d, x, y };
    }
}

var result = Eculide(a, b);
if (a < b) {
    console.log("a ^ -1 mod b = ", result.x);
} else {
    console.log("b ^ -1 mod a = ", result.y);
}
