/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */


var insertGreatestCommonDivisors = function(head) {

    let saveNext;
    let dummy = head;

    while (dummy && dummy.next) {
        saveNext = dummy.next;
        dummy.next = new ListNode(commonDivider(dummy.val, saveNext.val), saveNext);
        dummy = dummy.next.next; 
    }

    return head;
};

function commonDivider(a, b) {
    for (let i = 1; i <= Math.min(a, b); i++) {
        if (Number.isInteger(a / i) && Number.isInteger(b / i)) {
            max = i;
        }
    }
    return max;
}