/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    const reg = new RegExp(p, 'g'),
        result = reg.exec(s);
    return !! result && result.index === 0 && reg.lastIndex === s.length;
};
