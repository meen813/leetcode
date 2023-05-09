var searchMatrix = function(matrix, target) {
    // 입력된 matrix가 유효한지 확인합니다.
    if (!matrix || !matrix.length || !matrix[0].length) {
        return false;
    }
    
    // 2차원 배열을 1차원 배열로 변환합니다.
    const numRows = matrix.length;
    const numCols = matrix[0].length;
    let left = 0;
    let right = numRows * numCols - 1;
    
    // 이분 탐색(Binary Search)을 수행합니다.
    while (left <= right) {
        const mid = Math.floor((left + right) / 2); // 중앙 값을 찾습니다.
        const midVal = matrix[Math.floor(mid / numCols)][mid % numCols]; // 중앙 값을 가져옵니다.
        
        if (midVal === target) { // 찾는 값과 중앙 값이 같은 경우
            return true;
        } else if (midVal < target) { // 찾는 값이 중앙 값보다 큰 경우
            left = mid + 1; // 중앙 값을 기준으로 오른쪽 부분 배열에서 탐색합니다.
        } else { // 찾는 값이 중앙 값보다 작은 경우
            right = mid - 1; // 중앙 값을 기준으로 왼쪽 부분 배열에서 탐색합니다.
        }
    }
    
    // 값을 찾지 못한 경우
    return false;
};
