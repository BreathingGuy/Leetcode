
function Node (value, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
}

class BrowserHistory {
    constructor (homepage) {
        this.homepage = new Node (homepage);
    }

    visit (url) {
        this.homepage.next = new Node(url, this.homepage);
        this.homepage = this.homepage.next;
    }

    back (steps) {
        while (this.homepage.prev && steps--) {
            this.homepage = this.homepage.prev;
        }

        return this.homepage.value;
    }

    forward (steps) {
        while (this.homepage.next && steps--) {
            this.homepage = this.homepage.next;
        }

        return this.homepage.value;
    }
}

let broser = new BrowserHistory('leetcode');
broser.visit('vanish.com');
broser.visit('cock.com');
broser.visit('boobs.com');
broser.back(2);
broser.forward(2);
broser.back(2);
broser.back(2);
console.log(broser);

