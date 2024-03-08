"use strict";

// TIME O(n) | SPACE O(n)

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var removeNthFromEnd = function (head, n) {
    const dummy = new ListNode();
    dummy.next = head;

    const fast = moveFast(dummy, n);
    const slow = moveSlow(dummy, fast);

    slow.next = slow.next.next || null;
    return dummy.next;
};

function moveFast(fast) {
    for (let i = 0; i <= n; i++) {
        fast = fast.next
    }

    return fast;
}

function moveSlow(slow, fast) {
    while (fast) {
        slow = slow.next;
        fast = fast.next;
    }

    return slow;
}

