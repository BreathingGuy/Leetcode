function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function createNodeLists(arr) {
    let newNode = new ListNode(null, null);
    let dummy = newNode;
    for (let i = 0; i < arr.length; i++) {
        dummy.next = new ListNode(arr[i], null);
        dummy = dummy.next;
    }

    return newNode.next;
}

// #1
var reverseKGroup = function (head, k) {
    let sentinel = head;
    let reverseArr = [];
    let arr = [];
    let index = 1;

    while (sentinel) {
        if (index == k) {
            arr.push(sentinel);
            reverseArr.push(...arr.reverse());
            arr = [];
            index = 1;
        } else {
            arr.push(sentinel);
            index++;
        }
        sentinel = sentinel.next;
    }
    reverseArr.push(...arr);

    for (let i = 0; i < reverseArr.length; i++) {
        reverseArr[i].next = reverseArr[i + 1];
    }
    reverseArr[reverseArr.length - 1] = null;

    return reverseArr[0];
};

// #2       Time O(N) | Space O(N)
var reverseKGroup = function(head, k) {
    const sentinel = tail = new ListNode(0, head);

    while (true) {
        let [ start, last ]= moveNode(tail, k);
        if (!last) break;

        reverse([ start, tail.next, start ])

        const next = tail.next;
        tail.next = last;
        tail = next;
    }

    return sentinel.next;
};

const moveNode = (curr, k) => {
    const canMove = () => k && curr;
    while (canMove()) {
        curr = curr.next;
        k--;
    }

    return [ (curr?.next || null), curr ];
}

const reverse = ([ prev, curr, start ]) => {
    const isSame = () => curr === start;
    while (!isSame()) {
        const next = curr.next;
        curr.next = prev;

        prev = curr;
        curr = next;
    }
}

let head = createNodeLists([1,2,3,4]),
    k = 3;

console.log(reverseKGroup(head, k));