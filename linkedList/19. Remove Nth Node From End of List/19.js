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
 var removeNthFromEnd = function(head, n) {
    // solve this by using a single pass algorithm
    // 1. set the variables for slow and fast pointers both start from head.
    let fast = head;
    let slow = head;

    // 2. because the target to be removed is nth from the end, move the fast first by n from the start.
    for(let i = 0; i < n; i++){
        fast = fast.next;
    } 
    // 3. At this point, if fast does not exist, the head needs to be removed.
    if(!fast){
        return head.next
    }
    // 4. Move slow and fast pointers together until fast.next === null; 
    while(fast.next){
        slow = slow.next;
        fast = fast.next;
    }
    // 5. remove the target node
    slow.next = slow.next.next;
    return head;
};