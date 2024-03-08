var findingUsersActiveMinutes = function(logs, k) {
    let hash = new Map();
    let UAM = new Array(k).fill(0);

    for (let i = 0; i < logs.length; i++) {
        if (hash.has(logs[i][0])) {
            hash.get(logs[i][0]).push(logs[i][1]);
        } else {
            hash.set(logs[i][0], [logs[i][1]]);
        }
    }

    for (let value of hash.values()) {
        let set = new Set(value);
        UAM[set.size - 1] += 1;
    }

    return UAM;
};