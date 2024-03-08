

var calPoints = function(operations) {
    const stack = [];

    for (let i = 0; i < operations.length; i++) {
        if (!isNaN(operations[i])) {
            stack.push(+operations[i])
        } else {
            if (operations[i] == 'C') {
                stack.pop();
            } else if (operations[i] == 'D') {
                stack.push(stack[stack.length - 1] * 2);
            } else {
                stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
            }
        }
    }

    return stack.length > 0 ? stack.reduce((a, b) => a + b) : 0;
};

// let ops = ["5","2","C","D","+"];
// let ops = ["5","-2","4","C","D","9","+","+"];
// let ops = ["1","C"];

console.log(calPoints(ops));