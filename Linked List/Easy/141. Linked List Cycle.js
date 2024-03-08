"use strict";

// #1
var hasCycle = function(head) {
    let set = new Set();

    while (head) {
        if (set.has(head)) return true;

        set.add(head);
        head = head.next;
    }
};


// #2
var hasCycle = function(head) {
    let [slow, fast] = [head, head];

    while (fast && slow) {
        slow = head.next;
        fast = head.next.next;

        if (slow === fast) {
            return true;
        }

        head = head.next;
    }

    return false;
};
