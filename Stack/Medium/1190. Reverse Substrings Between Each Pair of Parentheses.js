var reverseParentheses = function(s) {
    s = `(${s})`;
    let stack = [[]];
    let score = 0;

    for (let i = 1; i < s.length - 1; i++) {
        if (s[i] == "(") {
            score++;
            stack[score] = [];
            continue;
        } else if (s[i] == ")"){
            stack[score] = stack[score].reverse();   
            score--;
            stack[score] = [...stack[score], ...stack[score + 1]];
            continue;
        }
        stack[score].push(s[i]);
    }

    return stack[0].join('');
};