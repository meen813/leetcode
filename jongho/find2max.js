//Question: 
//Given an array of numbers, write a function to find the second highest number.
//Input: [2, 5, 3, 9, 7, 1]
//Output: 7

// 1. give some time
// 2. input validation, negative int, duplicate num, what if arr lengh 0
// 2-1. ask requirement. time complexity / space complexity
// 3. explain your logic // psuedo or verbal 
// 3-1. my logic's complexity o(n) / o(1)
// 4. start coding // define function 
// 5. handle edge cases 
// 6. define varaibles 
// 7. code 
// 8. return the right varaible 
// 9. hit run
// 10. get feedback


//write a function to find second highet number
function findSecondMaxNum(arr) {
    //if array length is less than 2, then throw null;
    if (arr.length < 2) {
        return null;
    }

    //initialize two variables max and secondMax both as -infinity.
    let max = -Infinity;
    let secondMax = -Infinity;

    //iterate the array 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) { //i=0, max = 2
            secondMax = max;
            max = arr[i];
        } else if (arr[i] > secondMax) {
            secondMax = arr[i];
        }
    }
    return secondMax; // 7
}

var input = [10, 6, 7, 8, 2, 1, 0, 11]
console.log(findSecondMaxNum(input)) 