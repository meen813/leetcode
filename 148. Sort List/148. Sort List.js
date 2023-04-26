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
var sortList = function (head) {
    //edge case
    if (!head || !head.next) {
        return head;
    }
    // 1.divide the list into two halves
    let mid = findMiddle(head);
    let left = head;
    let right = mid.next;
    // 중간 노드 앞쪽 노드와의 연결 끊기
    mid.next = null;

    // Divide the linked list into smaller sublists using recursion.
    left = sortList(left);
    right = sortList(right);

    // Merge the sorted sublists together using the merge function.
    return merge(left, right);
};


// helper function to find the middle node
function findMiddle(head) {
    let slow = head;
    let fast = head.next;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next
    }
    return slow;
}

// Helper function to merge two sorted linked lists
function merge(left, right) {
    let dummy = new ListNode();
    let curr = dummy;

    while (left && right) {
        if (left.val < right.val) {
            curr.next = left;
            left = left.next;
        } else {
            curr.next = right;
            right = right.next
        }
        curr = curr.next
    }

    // find any remaining node
    if (left) {
        curr.next = left;
    } else {
        curr.next = right;
    }

    return dummy.next;
}



