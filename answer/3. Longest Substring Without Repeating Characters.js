/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let max = 1,
        temp = 1,
        index = 0,
        start = 0;
    if (s) {
        while (s.charAt(index + 1)) {
            while (s.charAt(index + 1) && !s.slice(start, index + 1).includes(s.charAt(index + 1))) {
                index += 1;
                temp += 1;
            }
            max = Math.max(max,temp);
            start += 1;
            index = start;
            temp = 1;
        }
        return max;
    }
    else {
        return 0;
    }
}
