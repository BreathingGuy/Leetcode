"use strict";

function Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
}


function copyRandomList(head) {
    let hash = new Map();
    let newHead = new Node(0);
    let itr = head;
    let itrN = newHead; 

    while (itr !== null) {
        let newN = new Node(itr.val);
        itrN.next = newN;
        itrN = newN;
        hash.set(itr, newN);

        itr = itr.next;
    }

    itr = head;
    while (itr !== null) {
        let newR = hash.get(itr);
        if (itr.random !== null) {
            newR.random = hash.get(itr.random);
        }

        itr = itr.next;
    }

    return newHead.next;
}

console.log(copyRandomList());