var partitionLabels = function(s) {
    let set = new Set([...s]);
    let charArr = [];
    let partitionArr = []

    for (let value of set) {
        charArr.push([s.indexOf(value), s.lastIndexOf(value)]);
    }

    partitionArr.push(charArr[0]);
    for (let i = 1, j = 0; i < charArr.length; i++) {

        if (charArr[i][0] < partitionArr[j][1]) {

            if(charArr[i][1] > partitionArr[j][1]) {
                partitionArr[j][1] = charArr[i][1];
            }

            continue;
        } 

        partitionArr.push(charArr[i]);
        j++;
    }

    for (let i = 0; i < partitionArr.length; i++) {
        partitionArr[i] = partitionArr[i][1] - partitionArr[i][0] + 1;

    }

    return partitionArr;  
};