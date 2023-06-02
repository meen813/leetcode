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


// Define a node class
class Node {
    constructor(val, next=null) {
        this.val = val;
        this.next = next;
    }
}

// Create a linked list with 5 nodes
const head = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))));

var middleNode = function (head) {
    let fast = head;
    let slow = head;
    while(fast !== null && fast.next !== null){
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
};

console.log(middleNode(head));