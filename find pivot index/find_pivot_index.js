// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
var pivotIndex = function(nums) {
    if(nums.length == 0){
        return -1;
    }
    if(nums.length == 1){
        return 0;
    }
    let totalSum = 0;
    let leftSum = 0;
    for(i=0; i<nums.length; i++){
        totalSum += nums[i]
        if(leftSum === totalSum-leftSum-nums[i]){
            return i;
        } leftSum += nums[i]
    }return -1
};


console.log(pivotIndex([1,7,3,6,5,6]))