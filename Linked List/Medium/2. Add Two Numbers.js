"use strict";

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
*/

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function createList(arr) {
    let sentinel = new ListNode();
    let currNode = sentinel; 

    for (let i = 0; i < arr.length; i++) {
        currNode.next = new ListNode(arr[i]);
        currNode = currNode.next;
    }

    return sentinel.next;
}

// #1
var addTwoNumbers = function(l1, l2, carry = 0) {
    let sentinel = new ListNode();
    let currNode = sentinel;

    while (l1 || l2 || carry) {
        const sum = (l1?.val || 0) + (l2?.val || 0) + carry;
        const val = sum % 10;
        carry = Math.floor(sum / 10);

        currNode.next = new ListNode(val);
        currNode = currNode.next;

        l1 = l1?.next || null;
        l2 = l2?.next || null;
    }

    return sentinel.next;
};

let l1 = createList([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
let l2 = createList([5,6,4]);

// console.log(addTwoNumbers(l1, l2));

// #2
var addTwoNumbers = function(l1, l2) {
    let num1 = '';
    let num2 = '';

    while (l1 || l2) {
        num1 = num1 + (l1?.val || 0);
        num2 = num2 + (l2?.val || 0);

        l1 = l1?.next || null;
        l2 = l2?.next || null;
    }

    console.log(num1.split('').reverse().join(''));
    console.log(num2.split('').reverse().join(''));

    const sum = BigInt(num1.split('').reverse().join('')) + BigInt(num2.split('').reverse().join(''));
    const str = String(sum);

    console.log(sum);

    let sentinel = new ListNode();
    let tail = sentinel;


    for (let i = str.length - 1; i >= 0; i--) {
        tail.next = new ListNode(Number(str[i]));
        tail = tail.next;
    }

    return sentinel.next;
}

console.log(addTwoNumbers(l1, l2));