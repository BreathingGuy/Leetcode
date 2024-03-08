
// 1
var maxProfit = function(prices) {
    let profitDay = prices[0];
    let profit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i + 1] - profitDay < 0) {
            profitDay = prices[i + 1];
        }
        if (prices[i + 1] - profitDay > profit) {
            profit = prices[i + 1] - profitDay;
        }
    }
    return profit;
};

// 2

var maxProfit = function(prices) {
    let [l, r] = [0, 1];
    let profit = 0;

    while (r < prices.length ) {
        if (prices[r] - prices[l] < 0) {
            l++;
            r = l + 1;
            continue;
        }

        if (prices[r] - prices[l] > profit) {
            profit = prices[r] - prices[l];
        }
        r++;
    }

    return profit;
};

// let prices = [7,1,5,3,6,4];
let prices = [7,6,4,3,1];

console.log(maxProfit(prices));