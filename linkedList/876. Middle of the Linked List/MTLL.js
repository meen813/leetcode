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

//  Given the head of a singly linked list, return the middle node of the linked list.
//  If there are two middle nodes, return the second middle node.

// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.

// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

// 1. find the length of the list
// 2. divide the length of list by 2 to find the mid node

var middleNode = function (head) {
    
    var getLength = function(head){
        let node = head;
        let count = 0;
    
        while(node !== null){
            count++;
            node = node.next;
        }
        return count;
    }

    const length = getLength;
    
    let node = head;
    const mid = math.floor(length/2)
    for(let i = 0; i < mid; i++){
        node = node.next;
    }

    const midNode = node;

    return midNode
    



};

// this function is not efficient.