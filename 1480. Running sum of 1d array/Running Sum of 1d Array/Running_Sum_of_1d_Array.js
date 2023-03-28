var runningSum = function(nums) {
    var sum = [];
    sum.push(nums[0]);
    for(i = 1; i < nums.length; i++){
        nums[i] = nums[i-1] + nums[i]
        sum.push(nums[i]);
    }
    return sum;
    
};

console.log(runningSum([1,2,3,4]))

