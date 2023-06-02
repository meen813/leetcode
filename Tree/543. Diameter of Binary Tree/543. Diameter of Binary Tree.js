var diameterOfBinaryTree = function (root) {
    // 1. 최대 지름을 0으로 초기화
    let maxDiameter = 0;

    // 2. DFS 함수 정의
    const dfs = (node) => {
        // 3. 종료 조건 설정
        if (!node) return 0;

        // 4. 왼쪽 서브트리와 오른쪽 서브트리의 높이 계산
        const leftHeight = dfs(node.left);
        const rightHeight = dfs(node.right);

        // 5. 최대 지름 갱신
        maxDiameter = Math.max(maxDiameter, leftHeight + rightHeight);

        // 6. 현재 노드의 높이 계산
        return Math.max(leftHeight, rightHeight) + 1;
    }

    // 7. DFS 호출
    dfs(root);

    // 8. 최대 지름 반환
    return maxDiameter;
};
