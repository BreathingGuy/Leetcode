var maximumGroups = function(grades) {
    let [left, right] = [1, grades.length];
    let max = 1;

    while (left <= right) {
        const mid = (left + right) >> 1;
        if ((mid * (mid + 1) / 2) <= grades.length) {
            max = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return max
};



let grades = [10,6,12,7,3,5];

console.log(maximumGroups(grades));