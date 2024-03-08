"use strict";

var reorderList = function (head) {
    const mid = getMid(head); /* Time O(N) */
    const reverseFromMid = reverse(mid); /* Time O(N) */

    reorder(head, reverseFromMid); /* Time O(N) */
};

function getMid(head) {
    let [slow, fast] = [head, head];

    while (fast) { 
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

function reverse(mid) {
    let [prev, curr, next] = [null, head, null];

    while (curr) {
        next = curr.next;
        curr.next = prev;

        prev = curr;
        curr = next;
    }

    return prev;
}

function reorder(l1, l2) {
    let [first, next, second] = [l1, null, l2];

    while (second.next) {
        next = first.next;
        first.next = second;
        first = next;

        next = second.next;
        second.next = first;
        second = next;
    }
}