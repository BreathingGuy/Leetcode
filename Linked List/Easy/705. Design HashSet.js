class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class MyHashSet {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    add(key) {
        let node = new Node(key);
        
        if (!this.head || !this.head) {
            this.head = node;
            this.tail = node;

            return this;
        }

        if (this.contains(key)) {
            return;
        }

        this.tail.next = node;
        this.tail = node;

        return this;
    };
    
    remove(key) {
        if (!this.head) {
            return null;
        }

        let deletedNode = null;

        while (this.head && this.head.value == key) {
            deletedNode = this.head;
            this.head = this.head.next;
        }

        let curNode = this.head;
        while (curNode && curNode.next) {
            if (curNode.next.value == key) {
                deletedNode = curNode.next;
                curNode.next = curNode.next.next;
            } else {
                curNode = curNode.next;
            }
        }

        if (this.tail && this.tail.value == key) {
            this.tail = curNode;
        }

        return deletedNode;
    };

    contains(key) {
        let curNode = this.head;

        while (curNode) {
            if (curNode.value == key) {
                return true;
            }

            curNode = curNode.next;
        }

        return false;
    };
}

let hashSet = new MyHashSet();
hashSet.add(2)
hashSet.add(2)
hashSet.add(2)
hashSet.add(3)
// hashSet.add(4)

console.log(hashSet);