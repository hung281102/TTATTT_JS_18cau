//!Viết chương trình tìm phân tích nguyên tố của một số nhập vào từ bàn phím:

function phanTichTSNT(n) {
    let coSo = [];
    let soMu = [];
    for (let index = 2; index <= n; index++) {
        let count = 0;
        while (n % index === 0) {
            ++count;
            n = n / index;
        }
        if (count) {
            soMu.push(count);
            coSo.push(index);
        }
    }
    return { coSo, soMu };
}

console.log(phanTichTSNT(4337800));
