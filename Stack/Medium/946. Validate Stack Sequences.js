var validateStackSequences = function(pushed, popped) {
    let stack = [];

    for (let i = 0, j = 0; j <= pushed.length;) {

        if (popped[j] != stack[stack.length - 1]) {
            stack.push(pushed[i]);
            i++;
        } else {
            stack.pop();
            j++;
        }

        if (i == pushed.length && popped[j] != stack[stack.length - 1]) {
            return false;
        }
    }

    return true;
};