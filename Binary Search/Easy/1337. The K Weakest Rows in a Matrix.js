const bs = function(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] == 0) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
        
    }

    return left;
}

var kWeakestRows = function(mat, k) {
    let count = [];
    let result = [];


    for(let i = 0; i < mat.length; i++){
        count.push([i, bs(mat[i])])
    }

    count.sort((a,b) => a[1] - b[1]);

    for(let i = 0; i < k; i++){
        result.push(count[i][0])
    }

    return result
};


let mat = 
[[1,1,0,0,0],
 [1,1,1,1,0],
 [1,0,0,0,0],
 [1,1,0,0,0],
 [1,1,1,1,1]], 
k = 3;

console.log(kWeakestRows(mat, k));