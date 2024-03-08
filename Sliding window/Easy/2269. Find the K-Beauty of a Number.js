var divisorSubstrings = function(num, k) {
    let strNum = num.toString();
    let seqNum = strNum.slice(0, k);
    let kBeauty = 0;

    if (num % seqNum == 0) {
        kBeauty++;
    }

    for (let i = k + 1; i <= strNum.length; i++) {
        seqNum = strNum.slice(i - k, i);

        if (num % seqNum == 0) {
            kBeauty++;
        }
    }

    return kBeauty;
};

// let num = 240, k = 2;
let num = 430043, k = 2

console.log(divisorSubstrings(num, k));

