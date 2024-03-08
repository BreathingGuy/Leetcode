"use strict";

// Time exceeded
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
        this.set = new Set();
    }

    get (key) {
        if (!this.map.has(key)) {
            return -1;
        } else {
            if (this.set.has(key)) {
                this.set.delete(key);
                this.set.add(key);
            } else {
                this.set.add(key);
            }

            return this.map.get(key);
        }
    }

    put (key, value) {
        if (this.map.size == this.capacity && !this.map.has(key)) {
            this.map.delete([...this.set][0]);
            this.set.delete([...this.set][0]);
        }

        this.map.set(key, value);
        
        if (this.set.has(key)) {
            this.set.delete(key);
            this.set.add(key);
        } else {
            this.set.add(key);
        }
    }
}


// #2 
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();

        this.head = {};
        this.tail = {};

        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    removeLastUsed () {
        const [ key, next, prev ]  = [ this.head.next.key, this.head.next.next, this.head ];

        this.map.delete(key);
        this.head.next = next;
        this.head.next.prev = prev;
    }

    put (key, value) {
        const hasKey = this.get(key) !== -1;
        const isAtCapacity = this.map.size === this.capacity;
        
        if (hasKey) return (this.tail.prev.value = value);
        if (isAtCapacity) this.removeLastUsed();

        const node = { key, value };
        this.map.set(key, node);
        this.moveToFront(node);
    }

    moveToFront (node) {
        const [ prev, next ] = [ this.tail.prev, this.tail ];

        this.tail.prev.next = node;
        this.connectNode(node, { prev, next });
        this.tail.prev = node;
    }

    connectNode (node, top) {
        node.prev = top.prev;
        node.next = top.next;
    }

    get (key) {
        const hasKey = this.map.has(key);
        if (!hasKey) return -1;

        const node = this.map.get(key);
        
        this.disconnectNode(node);
        this.moveToFront(node);

        return node.value;
    }

    disconnectNode (node) {
        node.next.prev = node.prev;
        node.prev.next = node.next;
    }
}
