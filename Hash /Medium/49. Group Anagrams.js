var groupAnagrams = function(strs) {
    const hashCode = (word) => {
        const frequency = new Array(26).fill(0);

        for (const char of word) {

            const charCode = getCode(char); 

            frequency[charCode]++; 
        }

        return buildHash(frequency)
    }
    const getCode = (char) => char.charCodeAt(0) - 'a'.charCodeAt(0);
    const buildHash = (frequency) => frequency.toString()

    let hashMap = new Map();
    let array = [];

    for (let i = 0; i < strs.length; i++) {
        let hashCod = hashCode(strs[i]);

        if (hashMap.has(hashCod)) {
            let varuable = hashMap.get(hashCod);
            varuable.push(strs[i]);
            hashMap.set(hashCod, varuable);
        } else {
            hashMap.set(hashCod, [strs[i]]);
        }
    }

    for (let c of hashMap.values()) {
        array.push(c);
    }

    return array;
};