var findMissingAndRepeatedValues = function(grid) {
    let flatGrid = grid.flat();
    const hash = new Map();
    const asnwNum = [0, 0];

    for (let item of flatGrid) {
        hash.set(item, (hash.get(item) || 0) + 1);
    }

    for (let i = 0; i <= flatGrid.length; i++) {
        if (hash.get(i) > 1) asnwNum[0] = i;
        if (!hash.get(i)) asnwNum[1] = i;
    }

    return asnwNum;
};