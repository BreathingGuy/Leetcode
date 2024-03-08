function guess (num, pick) {
    if (num > pick) return -1;
    if (num < pick) return 1;
    if (num == pick) return 0;
}

var guessNumber = function(n, pick) {
    let [l, r] = [1, n];

    while (l <= r) {
        const mid = (l + r) >> 1;
        const guessNum = guess(mid, pick);

        if (guessNum == 0) return mid
        if (guessNum == 1) l = mid + 1;
        if (guessNum == -1) r = mid - 1;
    }
};

const n = 2, pick = 1

console.log(guessNumber(n, pick));