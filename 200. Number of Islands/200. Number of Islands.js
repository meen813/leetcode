/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    let count = 0;

    const bfs = (row, col) => {
        if (row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col] === '0') {
            return;
        }

        grid[row][col] = '0'; // 현재 땅을 방문 처리
        const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]; // 상하좌우 방향
        for (const [dx, dy] of directions) {
            bfs(row + dx, col + dy); // 상하좌우 땅들을 재귀적으로 방문
        }
    };

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === '1') {
                count++;
                bfs(i, j);
            }
        }
    }

    return count;
};