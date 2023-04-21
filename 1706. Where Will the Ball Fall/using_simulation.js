var findBall = function (grid) {
    // 그리드 열의 개수와 행의 개수를 변수로 설정
    let cols = grid[0].length;
    let rows = grid.length;
    // 결과를 저장할 배열 초기화
    let result = [];

    // 그리드의 각 열을 순회
    for (let i = 0; i < cols; i++) {
        // 각 열의 시작 위치를 변수로 설정
        let col = i;
        // 열마다 공의 이동을 시뮬레이션
        for (let j = 0; j < rows; j++) {
            // 현재 위치의 값이 1인 경우 (오른쪽으로 이동)
            if (grid[j][col] === 1) {
                // 오른쪽으로 이동 가능한 경우
                if (col + 1 < cols && grid[j][col + 1] === 1) {
                    // 다음 위치로 이동
                    col += 1;
                }
                // 오른쪽으로 이동 불가능한 경우
                else {
                    // 공이 멈춘 위치를 -1로 설정
                    col = -1;
                    // 반복문 탈출
                    break;
                }
            }
            // 현재 위치의 값이 -1인 경우 (왼쪽으로 이동)
            else {
                // 왼쪽으로 이동 가능한 경우
                if (col - 1 >= 0 && grid[j][col - 1] === -1) {
                    // 다음 위치로 이동
                    col -= 1;
                }
                // 왼쪽으로 이동 불가능한 경우
                else {
                    // 공이 멈춘 위치를 -1로 설정
                    col = -1;
                    // 반복문 탈출
                    break;
                }
            }
        }
        // 현재 열에서 공이 멈춘 위치를 결과 배열에 추가
        result.push(col);
    }
    // 모든 열에 대한 공의 경로를 저장한 배열 반환
    return result;
};
