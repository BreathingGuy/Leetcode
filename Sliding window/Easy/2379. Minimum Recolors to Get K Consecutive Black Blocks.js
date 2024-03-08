// #1
var minimumRecolors = function(blocks, k) {
    const map = new Map();
    let minNum = k;

    for (let i = 0; i < k; i++) {
        map.set(blocks[i], (map.get(blocks[i]) || 0) + 1);
    }

    minNum = Math.min((map.get('W') || 0), minNum);


    for (let i = k, j = 0; i < blocks.length; i++, j++) {
        map.set(blocks[j], (map.get(blocks[j]) || 0) - 1);
        map.set(blocks[i], (map.get(blocks[i]) || 0) + 1);
        minNum = Math.min((map.get('W') || 0), minNum);
    }

    return minNum;
};

// #2
var minimumRecolors = function(blocks, k) {
    let res = k;
    let j = 0;
    while (j <= blocks.length - k) {
        let test = 0;
        for (let i = j; i < k + j; i++) {
            if (blocks[i] == 'W') test++
        }
        res = Math.min(test, res);
        j++;
    }

    return res;
};

let blocks = "WBBWWBBWBW", k = 7;
// let blocks = "WBWBBBW", k = 2;
// let blocks = "WBWW", k = 2;
// let blocks = "BB", k = 1;

console.log(minimumRecolors(blocks, k));