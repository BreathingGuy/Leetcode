var countBalls = function(lowLimit, highLimit) {
    const map = new Map();
    let max = 0;

    for (let i = lowLimit; i <= highLimit; i++) {
        let str = `${i}`;
        let num = 0;


        for (let i = 0; i < str.length; i++) {
            num += Number(str[i])
        }

        map.set(num, (map.get(num) || 0) + 1);
        max = Math.max(max, map.get(num));
    }

    return max;
};

// let lowLimit = 5, highLimit = 15;
// let lowLimit = 1, highLimit = 10;
let lowLimit = 19, highLimit = 28;

console.log(countBalls(lowLimit, highLimit));