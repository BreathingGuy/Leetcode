var diStringMatch = function(s) {
    let [left, right] = [0, s.length];
    let perm = [];

    for (let i = 0;  i <= s.length; i++) {
        if (s[i] == 'I') {
            perm.push(left);
            left++;
            continue;
        } else {
            perm.push(right);
            right--;
        }
    }

    return perm;
};