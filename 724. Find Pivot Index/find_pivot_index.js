// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
var pivotIndex = function(nums) {
    let leftSum = 0;
    let rightSum = nums.reduce((a, b) => a + b, 0);
    for (let i = 0; i < nums.length; i++) {
        rightSum -= nums[i];
        if (leftSum === rightSum) {
            return i;
        }
        leftSum += nums[i];
    }
    return -1;
};

var pivotIndex2 = function(nums) {
    let leftSum = 0;
    let rightSum = 0;
    for(let i = 0; i < nums.length; i++) {
        rightSum += nums[i];
    }
    for(let i = 0; i < nums.length; i++) {
        rightSum -= nums[i]
        if(leftSum === rightSum){
            return i
        }
        leftSum += nums[i];
    }
    return -1;
};


console.log(pivotIndex([1,7,3,6,5,6]))