/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//Floyd's algorithms 
var detectCycle = function (head) {
    let slow = head;
    let fast = head;
    while(fast && fast.next){ // while(head && head.next)일 경우 노드가 한개일 경우는 에러
        slow = slow.next;
        fast = fast.next.next;
        
        if(fast === slow){ //fast 와 slow가 만나면
            slow = head;    //slow를 시작지점으로 재설정
            while(fast !== slow){ // 다시 둘이 만날때까지
                fast = fast.next;
                slow = slow.next;
            }
            return slow
        }

    }
    return null;
};  