var intervalIntersection = function(firstList, secondList) {
    let [left, right] = [0, 0];
    const intersection = [];

    while (left < firstList.length && right < secondList.length) {
        const maxStart = Math.max(firstList[left][0], secondList[right][0]);
        const minEnd = Math.min(firstList[left][1], secondList[right][1]);

        if (maxStart <= minEnd) intersection.push([maxStart, minEnd]);

        if (firstList[left][1] < secondList[right][1]) left++;
        else right++;
    }

    return intersection;
};

const firstList = [[0,2],[5,10],[13,23],[24,25]], 
     secondList = [[1,5],[8,12],[15,24],[25,26]];
        //        [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]

console.log(intervalIntersection(firstList, secondList));