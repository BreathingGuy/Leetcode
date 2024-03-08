var romanToInt = function(s) {
    let romanNum = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let arrayOfNum = [...s],
        sum = 0;
    
    for (let i = 0; i < arrayOfNum.length; i++) {

        if (romanNum[arrayOfNum[i]] < romanNum[arrayOfNum[i + 1]]) {
            sum += romanNum[arrayOfNum[i + 1]] - romanNum[arrayOfNum[i]];
            i++
        } else {
            sum += romanNum[arrayOfNum[i]];
        }

    }


    return sum;
};