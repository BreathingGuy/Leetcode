var groupThePeople = function(groupSizes) {
    let hash = new Map();
    let groups = [];

    for (let i = 0; i < groupSizes.length; i++) {

        if (hash.has(groupSizes[i])) {
            hash.get(groupSizes[i]).push(i);
        } else {
            hash.set(groupSizes[i], [i]);
        }

        if (hash.get(groupSizes[i]).length === groupSizes[i]) {
            groups.push(hash.get(groupSizes[i]));
            hash.set(groupSizes[i], []);
        }

    }

    return groups;
};