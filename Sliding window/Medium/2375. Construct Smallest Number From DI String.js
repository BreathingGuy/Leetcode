var smallestNumber = function(pattern) {
    const stack = [];
    let [l, r] = [1, 0];

    for (let i = 0; i < pattern.length;) {
        if (pattern[i] == 'I') {

            while (stack.includes(l)) {
                l += 1;
                r += 1;
            }

            stack.push(l);
            i++;

            r = Math.max(...stack);

            if (i == pattern.length) {
                while (stack.includes(l)) {
                    l += 1;
                    r += 1;
                }
    
                stack.push(l);
            }
        } else if (pattern[i] == 'D') {


            let count = 0;
            while (pattern[i] == 'D') {
                count++;
                i++;
            }
            // console.log(r);

            r = r + count + 1;
            // console.log(r);
            
            while (count > 0) {
                stack.push(r--);
                count--;
            }

            if (i == pattern.length) {
                stack.push(r--);
            }
        }
    }

    return stack.join("");
};

let pattern = "IIIDIDDD";
// let pattern = "DDDIII";
// let pattern = "IDIDIDID";
// let pattern = "DDD";

console.log(smallestNumber(pattern));