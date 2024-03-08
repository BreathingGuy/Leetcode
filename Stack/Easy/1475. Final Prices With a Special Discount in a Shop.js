const finalPrices = function(prices) {
    const stack = [];
    const result = [];
    for (let i = prices.length - 1; i >= 0; i -= 1) {
        while (stack.length && stack[stack.length - 1] > prices[i]) {
            stack.pop();
        }
        result[i] = stack.length === 0 ? prices[i] : prices[i] - stack[stack.length - 1];
        stack.push(prices[i]);
    }
    return result;
};