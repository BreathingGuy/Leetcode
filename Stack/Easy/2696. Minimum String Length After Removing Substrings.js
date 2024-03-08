var minLength = function(s) {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        if (stack.length && 
            stack[stack.length - 1] == "A" && s[i] == "B" || 
            stack[stack.length - 1] == "C" && s[i] ==  "D") {
            stack.pop();
        } else {
            stack.push(s[i])
        }
    }

    return stack.length;
};

let s = "ABFCACDB";
// let s = "ACBBD";

console.log(minLength(s));