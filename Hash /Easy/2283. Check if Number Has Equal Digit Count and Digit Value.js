var digitCount = function(num) {
    const hash = new Map();

    for (let i = 0; i < num.length; i++) {
        hash.set(+num[i], (hash.get(+num[i]) || 0) + 1);
    }

    for (let i = 0; i < num.length; i++) {   
        if(hash.get(i) === Number(num[i])) {
            continue;
        } else if(!hash.get(i) && Number(num[i]) === 0) {
            continue;
        }

        return false;
    }

    return true;
};

// let num = "1";
let num = "1210";

console.log(digitCount(num));