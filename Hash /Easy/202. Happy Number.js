var isHappy = function(n) {
    let set = new Set();
    let sum = 0;

    while (n > 1) {
        n = n.toString().split('');

        for (let i = 0; i < n.length; i++) {
            sum += n[i] * n[i]
        }

        if (!set.has(sum)) {
            set.add(sum);
        } else {
            return false;
        }

        n = sum;
        sum = 0;
    }
    return true;
};