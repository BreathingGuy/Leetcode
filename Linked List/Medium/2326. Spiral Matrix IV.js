
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

var spiralMatrix = function(m, n, head) {
    const matrix = Array(m).fill(null).map(() => Array(n).fill(-1));
    let row = 0;
    let node = -1;
    let rotations = 0;
    let direction = 'right';

    while (head) {
        let val = head.val;
        head = head.next;
        
        if (direction == 'right') {
            node++;
            matrix[row][node] = val;

            if (node == n - 1 - rotations) {
                direction = 'down'
            }
        } else if (direction == 'down') {
            row++;
            matrix[row][node] = val;

            if (row == m - 1 - rotations) {
                direction = 'left'
            }
        } else if (direction == 'left') {
            node--;
            matrix[row][node] = val;

            if (node == rotations) {
                direction = 'up';
                rotations++;
            }
        } else if (direction == 'up') {
            row--;
            matrix[row][node] = val;

            if (row == rotations) {
                direction = 'right'
            }
        }
    }

    return matrix;
};

// let m = 3, n = 5, head = createNodeLists([3,0,2,6,8,1,7,9,4,2,5,5,0]);
let m = 1, n = 4, head = createNodeLists([0,1,2]);

console.log(spiralMatrix(m, n, head));

