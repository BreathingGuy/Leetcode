/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s, stack = []) {
    const map = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (let char of s) {
        const isInMap = (char in map);
        if (!isInMap) {
            stack.push(char);
            continue;
        }

        const isEqual = (stack[stack.length - 1] === map[char]);
        if (isEqual) {
            stack.pop();
            continue
        }

        return false;
    }

    return (stack.length === 0);
};