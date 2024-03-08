"use strict";

// #1
var getDecimalValue = function(head) {
    let stack = [];
    let value = 1;
    let sum = 0;

    while (head) {
        stack.push(head.val);
        head = head.next;
    }

    for (let i = stack.length - 1; i >= 0; i--) {
        if (stack[i] == 1) {
            sum += value;
        } 
        value = value * 2;
    }

    return sum;
};


// #2
var getDecimalValue = function (head) {
    let res = 0
    let node = head
    while (node) {
        res = res * 2 + node.value
        node = node.next
    }
    return res
};
