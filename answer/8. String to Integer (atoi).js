/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    const result = /^\s*([+-]?)(\d+)/.exec(str);
    if (result) {
        if (+result[2] > 2147483647) {
            return result[1] === '-' ? -2147483648 : 2147483647;
        }
        return result[1] ==='-' ? -result[2] : +result[2];
    }
    return 0;
};