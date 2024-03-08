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

function findLength (head) {
    let k = 1;
    while (head && head.next) {
        k++;
        head = head.next;
    } 
    return k;
}

var addTwoNumbers = function(l1, l2) {
    const stack = [];

    let lenL1 = findLength(l1);
    let lenL2 = findLength(l2);
    let dummy1, dummy2;

    if (lenL1 > lenL2) {
        dummy1 = l1;
        dummy2 = l2;
    } else {
        dummy1 = l2;
        dummy2 = l1;
    }

    for (let i = 0; i < Math.abs(lenL1 - lenL2); i++) {
        stack.push(dummy1.val);
        dummy1 = dummy1.next;
    }

    while (dummy1) {
        let nodeSum = dummy1.val + dummy2.val;

        if (nodeSum >= 10) {
            let diff = Math.floor(nodeSum / 10);
            for (let i = stack.length - 1; i >= 0; i--) {
                if (stack[i] + diff >= 10) {
                    diff = Math.floor((stack[i] + diff ) / 10);
                    stack[i] = (stack[i] + diff ) % 10;
                    if (i === 0) {
                        stack.unshift(diff);
                    }
                } else {
                    stack[i] += diff;
                    break; 
                }
            }
            if (stack.length == 0) {
                stack.push(diff);
            }
            stack.push(nodeSum % 10);
        } else {
            stack.push(nodeSum);
        }

        dummy1 = dummy1.next;
        dummy2 = dummy2.next;
    }

    return createNodeLists(stack);
};

let l1 = createNodeLists([1]), l2 = createNodeLists([9,9]);


console.log(addTwoNumbers(l1, l2));