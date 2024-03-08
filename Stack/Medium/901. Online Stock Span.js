
var StockSpanner = function() {
    this.stack = [];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    let count = 0;
    this.stack.push(price);

    for (let i = this.stack.length - 1; i >= 0; i--) {
        if (this.stack[i] <= price) {
            count++;
        } else {
            break;
        }
    }
    
    return count;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */