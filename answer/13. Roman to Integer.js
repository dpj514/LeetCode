/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let n = 0,
        map = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000,
        }
    for (let i = 0; i <=s.length - 1; i++) {
        if (map[s[i]] < map[s[i+1]]) {
            n -= map[s[i]]
        }
        else {
            n += map[s[i]]
        }
    }

    return n;

};
