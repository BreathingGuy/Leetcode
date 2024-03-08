var maxSatisfied = function(customers, grumpy, minutes) {
    let cur = 0;
    let max = 0;

    for (let i = 0; i < customers.length; i++) {
        if (!grumpy[i]) {
            cur += customers[i];
        }
    }
    max = Math.max(cur, max);

    for (let i = 0; i < minutes; i++) {
        if (grumpy[i]) {
            cur += customers[i];
        }
    }
    max = Math.max(cur, max);

 

    for (let i = minutes; i < grumpy.length; i++) {
        if (grumpy[i - minutes]) {
            cur -= customers[i - minutes];
        }
        if (grumpy[i]) {
            cur += customers[i];
        }
        max = Math.max(cur, max);
    }

    return max;
};

// const customers = [1,0,1,2,1,1,7,5], grumpy = [0,1,0,1,0,1,0,1], minutes = 3;
// const customers = [1], grumpy = [0], minutes = 1;

console.log(maxSatisfied(customers, grumpy, minutes));