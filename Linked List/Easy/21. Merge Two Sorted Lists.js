"use strict";

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var mergeTwoLists = function (list1, list2) {
    let sentinel = tail = new ListNode();

    while (list1 && list2) { /* Time O(N + M) */
        if (list1.val <= list2.val) {
            tail.next = list1;
            list1 = list1.next;
        }

        if (list2.val < list1.val) {
            tail.next = list2;
            list2 = list2.next;
        }

        tail = tail.next;
    }

    tail.next = list1 || list2;

    return sentinel.next;
}