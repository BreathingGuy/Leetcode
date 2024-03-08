/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    let num;

    for (let char of tokens) {

        switch (char) {
            case "+": 
                num = stack.pop() + stack.pop();
                stack.push(num);
                break;

            case "-": 
                num = stack.pop();
                num = stack.pop() - num;
                stack.push(num);
                break;

            case "*": 
                num = stack.pop() * stack.pop();
                stack.push(num);
                break;

            case "/": 
                num = stack.pop();
                num = stack.pop() / num;
                if (num <= 0) {
                    stack.push(Math.ceil(num));
                } else {
                    stack.push(Math.floor(num));
                }
                
                break;

            default: 
                stack.push(+char);

        }
    }

    return stack[0];
};