var countPoints = function(rings) {
    let hash = new Map();
    let count = 0;

    for (let i = 0; i < rings.length; i++) {
        if (!/\D/.test(rings[i])) {
            if (!hash.has(rings[i])) {
                hash.set(rings[i], rings[i - 1])
            } else {
                hash.set(rings[i], hash.get(rings[i]) + rings[i - 1])
            }
        }
    }

    hash.forEach((value) => {
        if (value.includes("B") && value.includes("R") && value.includes("G")) {
            count++;
        }
    });

    return count;
};