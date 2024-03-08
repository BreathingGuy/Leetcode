
// #1 Bad time
// var maxConsecutiveAnswers = function(answerKey, k) {
//     let left = 0;
//     let count = new Map();
//     let result = 0;

//     for (let right = 0; right < answerKey.length; right++) {
//         let length = right - left + 1;

//         count.set(answerKey[right], (count.get(answerKey[right]) || 0) + 1);

//         if ((length - Math.max(...count.values())) > k) {
//             count.set(answerKey[left], count.get(answerKey[left]) - 1);
//             left++;
//         }

//         length = right - left + 1;
//         result = Math.max(result, length);
//     }

//     return result;
// };


// #2 
function maxConsecutiveAnswers(answerKey, k) {
    let left = 0;
    let result = 0;

    let countF = 0;
    let countT = 0;

    for (let right = 0; right < answerKey.length; right++) {
        let length = right - left + 1;

        if (answerKey[right] == 'T') countT++;
        if (answerKey[right] == 'F') countF++;

        if ((length - Math.max(countF, countT)) > k) {
            let firstChar = answerKey[left];

            if (firstChar == 'T') countT--;
            if (firstChar == 'F') countF--;

            left++;
        }

        length = right - left + 1;
        result = Math.max(length, result);
    }

    return result;
};

let answerKey = "TTFF", k = 2;
// let answerKey = "TFFT", k = 1;
console.log(maxConsecutiveAnswers(answerKey, k));

