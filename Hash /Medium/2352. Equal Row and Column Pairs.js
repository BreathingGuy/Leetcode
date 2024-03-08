"use strict";

var equalPairs = function (grid) {
    let pairs = 0;
    let hashRow = new Map();
    let hashColumn= new Map();
    let columnGrid = [];

    let length = grid.length;
    for (let i = 0; i < length; i++) {
        hashRow.set(`${grid[i]}`,(hashRow.get(`${grid[i]}`) || 0) + 1);
    }

    // console.log(hashRow);

    for (let i = 0; i < length; i++) {
        for(let j = 0; j < length; j ++) {
            columnGrid.push(grid[j][i]);
        }
        
        if (hashRow.has(`${columnGrid}`)) {
            hashColumn.set(`${columnGrid}`, (hashColumn.get(`${columnGrid}`) || 0) + 1);
        }
        columnGrid = [];
    }

    for (let [key, value] of hashColumn) {
        pairs += hashRow.get(key) * value;
    }
    return pairs;
};

let grid = [[3,1,2,2],
            [1,4,4,5],
            [2,4,2,2],
            [2,4,2,2]];


console.log(equalPairs(grid));