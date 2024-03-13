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

var oddEvenList = function(head) {
    if (!head) return null;

    let odd = head;
    let even = head.next;
    let headEven = even;
    
    while (even && even.next) {
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }

    odd.next = headEven;

    return head;
};

let head = createList([1,2,3,4,5,6]);

console.log(oddEvenList(head));