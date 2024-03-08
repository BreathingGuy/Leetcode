"use strict";

var minimumCardPickup = function(cards) {
    let dic = new Map();
    let ans = Infinity;

    for (let i = 0; i < cards.length; i++) {
        if (dic.has(cards[i])) {
            ans = Math.min(ans, i - dic.get(cards[i]) + 1);
        }
        
        dic.set(cards[i], i);
    }

    return ans == Infinity ? -1 : ans;
};