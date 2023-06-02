/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

var mergeTwoLists = function (l1, l2) {
    // Create a dummy node for the new list
    const dummy = new ListNode(0, null);
    // Create a var 'tail' to indicate the last node of the list.
    let tail = dummy;

    // Compare the first nodes of each list and add the smaller one to the new list
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            tail.next = l1;
            l1 = l1.next;
        } else {
            tail.next = l2;
            l2 = l2.next;
        }
        tail = tail.next;
    }

    // Add any remaining nodes from the non-empty list to the new list
    tail.next = l1 || l2;

    // Return the head of the new list (ignoring the dummy node)
    return dummy.next;
};


