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
var swapNodes = function (head, k) {
    [slow, fast, dummy] = [head, head, head];

    for (let i = 1; i < k; i++) {
        fast = fast.next;
    }

    dummy = fast;

    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }

    let val = dummy.val;
    dummy.value = slow.val;
    slow.val = val;

    return head;
};


let head = createNodeLists([1,2,3,4,5]);
let k = 2;

console.log(swapNodes(head, k));