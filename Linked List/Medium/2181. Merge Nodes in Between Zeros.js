var mergeNodes = function(head) {
    let prev = head;
    let start = head;

    while (head) {
        if (head.val === 0) {
            prev.next = head.next;
        } else {
            while (head.next.val !== 0) {
                head.next.val = head.next.val + head.val;
                prev.next = head.next;
                head = head.next;
            }
            prev = head;
        }
        head = head.next;
    }
    return start.next;
};