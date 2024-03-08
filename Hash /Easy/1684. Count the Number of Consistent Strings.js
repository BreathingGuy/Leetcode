var countConsistentStrings = function(allowed, words) {
    let reg = new RegExp(`^[${allowed}]+$`);
    let count = 0;

    words.forEach((word) => {
        if(word.match(reg)) {
            count++;
        }
    });

    return count;
};