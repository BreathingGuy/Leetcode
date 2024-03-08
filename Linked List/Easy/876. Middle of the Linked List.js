"use strict";

// #1
var middleNode = function(head) {
    let [slow, fast] = [head, head];

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
};


// #2
var middleNode = function(head) {
    let [slow, fast] = [head, head.next];

    while (fast) {
        slow = slow.next;
        fast = fast.next?.next;
    }

    return slow;
};
