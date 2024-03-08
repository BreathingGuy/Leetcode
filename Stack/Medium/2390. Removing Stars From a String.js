var removeStars = function(s) {
    let result = '';
    let backspace = 0;
    
    for (let i = s.length; i--;) {
        if (s[i] == "*") {
            backspace++;
        } else if (backspace > 0) {
            backspace--;
        } else {
            result = s[i] + result;
        }
    }
    
    return result;
}