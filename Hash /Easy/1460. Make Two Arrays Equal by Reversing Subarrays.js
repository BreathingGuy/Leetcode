var canBeEqual = function(target, arr) {
    const mapTarget = new Map();
    const mapArr = new Map();

    for (let i = 0; i < arr.length; i++) {
        mapTarget.set(target[i], (mapTarget.get(target[i]) || 0) + 1);
        mapArr.set(arr[i], (mapArr.get(arr[i]) || 0) + 1);
    }

    for (let [key, val] of mapTarget) {
        if (!mapArr.has(key)) return false;
        if (mapArr.get(key) !== mapTarget.get(key)) return false;
    }

    return true;
}
let target = [1,2,3,4], arr = [2,4,1,3];
// let target = [7], arr = [7];
// let target = [3,7,9], arr = [3,7,11];


console.log(canBeEqual(target, arr));