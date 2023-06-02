var removeNthFromEnd = function(head, n) {
    let fast = head, slow = head
    for (let i = 0; i < n; i++) fast = fast.next
    if (!fast) return head.next
    while (fast.next) fast = fast.next, slow = slow.next
    slow.next = slow.next.next
    return head
};


// 단일 순환(single pass) 알고리즘은 입력 데이터를 한 번 순환하면서 문제를 해결하는 알고리즘입니다. 즉, 입력 데이터를 두 번 이상 반복해서 처리하지 않으므로 시간 복잡도가 낮고 공간 복잡도가 적습니다.

// 단일 순환 알고리즘은 대개 두 개 이상의 포인터를 사용하여 작동합니다. 예를 들어, 연결 리스트에서 n번째 노드를 찾는 문제는 두 개의 포인터를 사용하여 단일 순환으로 해결할 수 있습니다. 하나의 포인터를 n번째 노드까지 이동시키고, 두 번째 포인터를 head 노드에 위치시킨 다음 두 개의 포인터를 동시에 이동시켜 첫 번째 포인터가 끝에 도달할 때까지 두 번째 포인터를 이동시킵니다.

// 단일 순환 알고리즘은 일반적으로 빠른 실행 시간과 작은 공간 요구 사항을 가지며, 문제를 해결하는 데 필요한 작업을 최소한으로 줄일 수 있습니다. 그러나 경우에 따라서는 다른 알고리즘이 더 나은 실행 시간 또는 공간 요구 사항을 가질 수 있으므로 문제에 따라서 최적의 알고리즘을 선택해야 합니다.