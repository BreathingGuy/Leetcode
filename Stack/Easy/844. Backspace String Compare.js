var backspaceCompare = function(s, t) {
    let stack1 = []
    let stack2 = []
    for(let i = 0; i < s.length; i++){
        s[i]=== '#' ?  stack1.pop() : stack1.push(s[i])

    }
    for(let i = 0; i < t.length; i++){
        t[i] === '#' ? stack2.pop() : stack2.push(t[i])
    }
    return stack1.join('') === stack2.join('')
};