function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
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

function transformToArray(list) {
    const arr = [];
    while (list) {
        arr.push(list.val);
        list = list.next;

        // try {
        //     if (typeof(list.next) == 'null') {
        //         arr.push('null')
        //     }
        // } catch {
        //     arr.push('null')
        // }

    }
    return arr;
}


var swapPairs = function(head) {
    if (!head || !head.next) return head

    let dummy = head;
    head = head.next;
    let prev = 0;

    while (dummy && dummy.next) {
        let nextnext = dummy.next.next // 3 => null
        let curr = dummy ; // 1 => 2
        let next = dummy.next // 2 => 3

        curr.next = nextnext; // 1 => 3
        next.next = curr; // 2 => 1
        if (prev) {
            prev.next = next;
        }
        prev = curr;

        dummy = dummy.next
        // console.log(dummy);
    }


    console.log(transformToArray(head));

    return head;
};

let head = createNodeLists([]);

console.log(swapPairs(head));