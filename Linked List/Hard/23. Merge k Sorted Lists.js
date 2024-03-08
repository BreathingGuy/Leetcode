
var mergeKLists = function(lists) {
    let previous = null;

    for (let i = 0; i < lists.length; i++) {
        previous = mergeTwoLists(previous, lists[i]);
    }

    return previous;
};


function mergeTwoLists(list1, list2) {
    let sentinel = new ListNode(0);
    let tail = sentinel;

    while (list1 && list2) {
        let is1Addbl = list1.val <= list2.val;
        
        if (is1Addbl) {
            tail.next = list1;
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
        }

        tail = tail.next;
    }

    tail.next = list1 || list2;

    return sentinel.next;
}
