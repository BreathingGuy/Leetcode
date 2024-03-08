"use strict";

var pairSum = function(head) {
    const mid = getTheMid(head);
    const lastNode = reorder(mid);
    let max = 0;

    while (lastNode) {
        let sum = lastNode.val + head.val;
        
        if (sum > max) {
            max = sum;
        }

        lastNode = lastNode.next;
        head = head.next;
    }

    return max;
};

function getTheMid(head) {
    let [slow, fast] = [head, head];

    while (fast) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

function reorder(mid) {
    let [prev, curr, next] = [null, mid, null];

    while (curr) {
        next = curr.next;
        curr.next = prev;

        prev = curr;
        curr = next;
    }

    return prev;
}