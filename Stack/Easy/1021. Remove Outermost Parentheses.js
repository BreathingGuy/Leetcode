var removeOuterParentheses = function(s) {
    let [left, right] = [0, 0];
    let stack = [];
    let clearParentheses = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push('(');
            left++
        } else {
            stack.push(')');
            right++;
        }
        if (left === right) {
            clearParentheses.push(...stack.slice(1, stack.length - 1))

            stack = [];
        }
    }
    return clearParentheses.join('');
};