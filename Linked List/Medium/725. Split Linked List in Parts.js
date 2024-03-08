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


var splitListToParts = function(root, k) {
    const parts = new Array(k).fill(null);

    let len = 0;
    let node = root;
    while (node) {
        len++;
        node = node.next;
    }

    const n = Math.floor(len / k);
    let r = len % k;

    node = root;
    let prev = null;

    for (let i = 0; node && i < k; i++, r--) {
        parts[i] = node;

        for (let j = 0; j < n + (r > 0 ? 1 : 0); j++) {
            prev = node;
            node = node.next;
        }

        if (prev) {
            prev.next = null;
        }
    }

    return parts;
};

let head = createNodeLists( [1,2,3,4,5,6,7,8,9,10] ), k = 3;
// let head = createNodeLists([1,2,3]), k = 5;

console.log(splitListToParts(head, k));