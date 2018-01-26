/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let s = String(x);
    if (s.length === 1) {
        return true;
    }
    for (let i = 0; i < Math.floor(s.length / 2); i++) {
        if (s[i] !== s[s.length-i-1]) {
            return false;
        }
    }
    return true;
};