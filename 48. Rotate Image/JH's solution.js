
var rotate = function(matrix) {
    const rows = matrix.length
    const cols = matrix[0].length;
    const newMatrix = [];

    for(let i = 0; i < rows; i++){
        const newRow = []
        for(let j = cols - 1 ; j >= 0; j--){
            newRow.push(matrix[j][i])
        }
        newMatrix.push(newRow);
    }
    return newMatrix;
};

const input = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(rotate(input)) // [[7,4,1],[8,5,2],[9,6,3]]