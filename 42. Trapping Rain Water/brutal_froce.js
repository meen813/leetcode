function trap(height) {
    if(height.every(val => val === height[0])){
        return 0;
    }
    let ans = 0;
    const size = height.length;
    for (let i = 1; i < size - 1; i++) {
        let left_max = 0, right_max = 0;
        for (let j = i; j >= 0; j--) { //Search the left part for max bar size
            left_max = Math.max(left_max, height[j]);
        }
        for (let j = i; j < size; j++) { //Search the right part for max bar size
            right_max = Math.max(right_max, height[j]);
        }
        ans += Math.min(left_max, right_max) - height[i];
    }
    return ans;
}
