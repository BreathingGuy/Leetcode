var maxDepth = function(s) {
    let stack = [];
    s = s.split('');
    let maxSize = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(s[i]);
        } else if (s[i] === ')') {
            stack.pop();
        }

        if (stack.length > maxSize) {
            maxSize = stack.length;
        }
    }
    return maxSize;
};