/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    // 0. edge cases
    let size = 0;
    let curr = head;
    while (curr) {
        size++;
        curr = curr.next;
    }
    if (size === n) {
        return head.next;
    }
    // 1. traverse to the target node
    let indexToRemove = size - n;
    let prev = null;
    curr = head;
    while (indexToRemove > 0) {
        prev = curr;
        curr = curr.next;
        indexToRemove--;
    }
    // 2. remove the target node
    prev.next = curr.next;
    // 3. return the head of the modified list
    return head;
};
