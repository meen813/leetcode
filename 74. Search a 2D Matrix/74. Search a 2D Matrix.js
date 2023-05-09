/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    //find which array has the target
    let counter = 0;
    for (let i = 1; i < matrix.length; i++) {
        if (matrix[i][0] === target) {
            return true;
        } else if (matrix[i][0] < target) {
            counter++
        } else {
            break;
        }
    }

    //binary search
    let left = 0;
    let right = matrix[counter].length - 1;
    while (left <= right) {
        let middle = Math.floor((left + right) / 2)
        if (target === matrix[counter][middle]) {
            return true
        } else if (target < matrix[counter][middle]) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }
    return false;

}