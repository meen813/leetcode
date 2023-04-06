/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
function floodFill(image, sr, sc, newColor) {
    //store the color of starting pixel
    const oldColor = image[sr][sc];

    //If a new color is same as the color at the starting pixel, return image
    if (oldColor === newColor) {
        return image;
    }

    // perform the flood fill by using depth-first search function
    dfs(image, sr, sc, oldColor, newColor)


    return image;
}

function dfs(image, i, j, oldColor, newColor) {
    // 현재 픽셀이 경계를 벗어나거나 색상이 이전 색상과 다른 경우, 아무것도 하지 않습니다.
    if (i < 0 || i >= image.length || j < 0 || j >= image[0].length || image[i][j] !== oldColor) {
        return;
    }
    // 현재 픽셀의 색상을 새 색상으로 업데이트합니다.
    image[i][j] = newColor;

    // 인접한 픽셀들에 대해 dfs를 재귀적으로 호출합니다.
    dfs(image, i - 1, j, oldColor, newColor); // 위
    dfs(image, i + 1, j, oldColor, newColor); // 아래
    dfs(image, i, j - 1, oldColor, newColor); // 왼쪽
    dfs(image, i, j + 1, oldColor, newColor); // 오른쪽

}