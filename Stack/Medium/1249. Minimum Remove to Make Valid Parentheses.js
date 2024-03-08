var minRemoveToMakeValid = function(s) {
    let stack = [];
    let stackOfNumbers = [];
    let correctWord = '';

    for (let i = 0; i < s.length; i++) {
        if (s[i] != '(' && s[i] != ')') {
            continue;
        }

        if (s[i] == '(') {
            stack.push('(');
            stackOfNumbers.push(i);
        } else if (s[i] == ')' && stack.length > 0) {
            stack.pop();
            stackOfNumbers.pop();
        } else {
            stackOfNumbers.push(i);
        }
    }

    for (let i = 0, j = 0; i < s.length; i++) {
        if (i == stackOfNumbers[j]) {
            j++;
            continue;
        }
        correctWord += s[i];
    }

    return correctWord;
};