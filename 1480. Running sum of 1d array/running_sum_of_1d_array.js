/**
 * @param {number[]} nums
 * @return {number[]}
 */


// var runningSum = function (nums) {
//     for (let i = 0; i < nums.length; i++) {
//         if(i === 0){
//             nums[i] = nums[i];
//         }
//         else{
//             nums[i] = nums[i - 1] + nums[i]
//         }
//     }
//     console.log(nums)
//     return nums;
// };


// runningSum([1,2,3,4])

// better time complexity

var runningSum = function(nums){
    let sum = 0;
    for(let i = 0; i < nums.length; i++){
        sum += nums[i]
        nums[i] = sum;
    }
    return nums;
}

// best 

var runningSum = function (nums) {
    return nums.reduce((acc, curr, i) => [...acc, acc[i-1] + curr], [0]);
};

runningSum([1,2,3,4]);

// var runningSum = function (nums) { ... }: 이 부분은 runningSum이라는 이름의 함수를 정의합니다. nums 라는 인자(argument)를 받습니다.

// return nums.reduce( ... ): 이 부분에서, nums 배열에 reduce 함수를 사용하여 원소들을 처리하고 결과를 누적하는 값을 계산합니다.

// (acc, curr, i) => [...acc, acc[i-1] + curr]: 이 부분은 reduce 함수의 콜백(callback) 함수입니다. 콜백 함수는 nums 배열의 각 원소에 대해 실행됩니다. acc 는 누적 값을 저장하는 변수입니다. curr 는 nums 배열의 현재 원소입니다. i 는 nums 배열의 현재 원소의 인덱스입니다. 콜백 함수는 [...acc, acc[i-1] + curr] 형태의 배열을 반환합니다. 이 배열은 acc 배열에 현재 curr 원소를 더한 값을 추가한 것입니다.



