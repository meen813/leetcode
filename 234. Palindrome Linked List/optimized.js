var isPalindrome = function(head) {
    // Fast-slow pointer to find the middle node of the linked list
    let slow = head,
        fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Reverse the second half of the linked list
    let prev = null,
        curr = slow,
        next = null;
    while (curr) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    // Compare the first half and second half of the linked list
    let left = head,
        right = prev;
    while (right) {
        if (left.val !== right.val) {
            return false;
        }
        left = left.next;
        right = right.next;
    }
    return true;
};
