// Reservoir Sampling algorithm O(n) O(1)
var Solution = function(head) {
    this.head = head;
};

Solution.prototype.getRandom = function() {
    let i = 2;
    let cur = this.head.next;
    let val = this.head.val;

    while (cur) {
        const ration = 1/i;
        if (Math.random() <= ration) val = cur.val;
        i++;
        cur = cur.next;
    }

    return val;
};

// Brute Forse O(n) O(m)

var Solution = function(head) {
    this.arr = [];
    let curr = head;

    while (curr) {
        this.arr.push(curr.val);
        curr = curr.next;
    }
};

Solution.prototype.getRandom = function() {
    return this.arr[Math.floor(Math.random() * this.arr.length)];
};