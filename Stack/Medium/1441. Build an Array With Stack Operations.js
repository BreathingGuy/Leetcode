/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    let operationsArray = [];

    for (let i = 1, j = 0; i <= n; i++) {
        if (i == target[j]) {
            operationsArray.push("Push");
            j++;

            if (j == target.length) {
                return operationsArray;
            }
        } else {
            operationsArray.push("Push");
            operationsArray.push("Pop");
        }
    }

    return operationsArray;
};