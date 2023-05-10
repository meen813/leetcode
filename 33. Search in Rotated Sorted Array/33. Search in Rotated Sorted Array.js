// 33. Search in Rotated Sorted Array
// Medium
// 21.1K
// 1.3K
// company
// Uber
// company
// Bloomberg
// company
// Google
// There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.

// 배열의 중간에 있는 값을 선택합니다.
// 중간 값이 찾는 값과 같으면 해당 인덱스를 반환합니다.
// 중간 값이 회전 정렬된 부분의 끝에 있는 값보다 크거나 같으면 중간 값의 왼쪽 부분에 찾는 값이 위치합니다.
// 중간 값이 회전 정렬된 부분의 끝에 있는 값보다 작으면 중간 값의 오른쪽 부분에 찾는 값이 위치합니다.
// 2~4 과정을 반복합니다.

/**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    var search = function (nums, target) {

        let left = 0, right = nums.length - 1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                return mid;
            }
            if (nums[mid] >= nums[left]) { // 중간 값이 왼쪽 부분에 속하는 경우
                if (target >= nums[left] && target < nums[mid]) { // 찾는 값이 중간 값의 왼쪽 부분에 위치하는 경우
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            } else { // 중간 값이 오른쪽 부분에 속하는 경우
                if (target <= nums[right] && target > nums[mid]) { // 찾는 값이 중간 값의 오른쪽 부분에 위치하는 경우
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
        }
        return -1;
    };
