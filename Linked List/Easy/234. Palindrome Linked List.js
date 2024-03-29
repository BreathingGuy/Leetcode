"use strict";

// #1
var isPalindrome = function(head) {
    let arr = [];

    while (head) {
        arr.push(head.val);
        head = head.next;
    }

    return arr.join('') == arr.reverse().join('');
};


// #2
var isPalindrome = function(head) {
    let slow = head, 
        fast = head, 
        prev, 
        temp;

    while (fast && fast.next) {
        slow = slow.next; 
        fast = fast.next.next;
    }
    
    prev = slow, 
    slow = slow.next, 
    prev.next = null;

    while (slow) {
        temp = slow.next, 
        slow.next = prev, 
        prev = slow, 
        slow = temp;
    }
        
    fast = head, 
    slow = prev;

    while (slow) {
        if (fast.val !== slow.val) {
            return false
        } else {
            fast = fast.next, slow = slow.next
        }
    }
    return true
};