var arrangeCoins = function(n) {
    let [l, r] = [0, n];

    while (l <= r) {
        const mid = (l + r) >> 1;
        const curSum = mid * (mid + 1) / 2;

        if (curSum === n) return mid;
        if (curSum < n) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }

    return r;
};

let n = 8;

console.log(arrangeCoins(n));
