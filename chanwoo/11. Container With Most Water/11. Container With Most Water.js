/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    if (height.length === 0) {
        return 0;
    }

    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;


    while (left < right) {
        let currentArea = (right - left) * Math.min(height[left], height[right])
        maxArea = Math.max(currentArea, maxArea)

        if (height[right] > height[left]) {
            left++;
        } else {
            right--
        }
    }
    return maxArea;
}