var setZeroes = function(matrix) {
    let arr = matrix.join(',').split(',');

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            
            for (let k = 0; k < matrix.length; k++) {
                matrix[k][i % matrix[0].length] = 0
            }

            for (let j = 0; j < matrix[0].length; j++) {
                matrix[Math.floor(i / matrix[0].length)][j] = 0;
            }
        }
    }

    return matrix; 
};