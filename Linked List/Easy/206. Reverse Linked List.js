"use strict";

var reverseList = function(head) {
  let [prevNode, currNode, nextNode] = [null, head, null];
  
  while (currNode) {
    nextNode = currNode.next;
    currNode.next = prevNode;

    prevNode = currNode;
    currNode = nextNode;
  }

  return prevNode;
};

