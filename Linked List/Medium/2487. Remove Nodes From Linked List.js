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
var removeNodes = function(head) {
    let stack = [];
    let sentinel = head;

    while (sentinel) {
        while (stack.length && sentinel.val > stack[stack.length - 1].val) {
            stack.pop();
        }

        stack.push(sentinel);
        sentinel = sentinel.next;
    }

    for (let i = 0; i < stack.length; i++) {
        stack[i].next = stack[i + 1];
    }
    stack[stack.length - 1].next = null;

    return stack[0];
};

// #2
var removeNodes = function(head) {
    const head2 = reverseLinkedList(head);

    let prev = head2;
    let curr = head2.next;

    while (curr) {
        const next = curr.next;
        if (curr.val < prev.val) { // remove invalid node
            prev.next = null;
            curr.next = null;
            curr = next;
        } else { // connect valid node
            prev.next = curr;
            prev = curr;
            curr = next;
        }
    }
    return reverseLinkedList(head2);
};

function reverseLinkedList(node) {
    let prev = null;
    let curr = node;

    while (curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    return prev;
}

let head = createNodeLists([5,2,13,3,8]);

console.log(removeNodes(head));