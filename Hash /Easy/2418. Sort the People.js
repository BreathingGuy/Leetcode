var sortPeople = function(names, heights) {
    let hash = new Map(Object.entries(heights));
    let answ = [];

    heights.sort((a,b) => b - a);

    for (let [key, value] of hash) {
        answ[heights.indexOf(value)] = names[+key];
    }

    return answ;
};