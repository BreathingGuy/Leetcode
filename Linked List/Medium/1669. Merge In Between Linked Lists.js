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

// If they were values
// var mergeInBetween = function (list1, a, b, list2) {
//     let sentinel = new ListNode(null, list1);
//     let dummy = sentinel;

//     while (sentinel.next) {
//         if (sentinel.next.val == a) {
//             dummy = sentinel.next.next;
//             while (list2.next) {
//                 sentinel.next = list2;
//                 sentinel = sentinel.next;
//                 list2 = list2.next;

//                 if (dummy.val <= b) {
//                     dummy = dummy.next;
//                 }
//             }
//         } else {
//             sentinel = sentinel.next;
//         }
//     }

//     if (dummy.val <= b) {
//         while (dummy.val <= b) {
//             dummy = dummy.next;
//         }
//         sentinel.next = dummy;
//     } else {
//         sentinel.next = dummy;
//     }


//     console.log(dummy, '         DUMMY');
//     console.log(sentinel);


//     return list1;
// };

// Indexes
var mergeInBetween = function(list1, a, b, list2) {
    let sentinel = new ListNode(null, list1);
    let dummy = sentinel;
    let index = 0;

    while (sentinel.next) {
        if (index == a) {
            dummy = sentinel.next;
            index++;

            while (list2.next) {
                sentinel.next = list2;
                sentinel = sentinel.next;
                list2 = list2.next;

                if (index <= b) {
                    dummy = dummy.next;
                    index++;
                }
            }
            sentinel = sentinel.next;
        } else {
            sentinel = sentinel.next;
            index++;
        }
    }

    if (index <= b) {
        while (index <= b) {
            dummy = dummy.next;
            index++;
        }
    }

    sentinel.next = dummy.next;

    return list1;
};


list1 = createNodeLists([0,1,2,3,4,5,6,7,8,9]),
a = 3,
b = 5,
list2 = createNodeLists([1000000,1000001,1000002,1000003,1000004,1000005,1000006]);

console.log(mergeInBetween(list1, a, b, list2));