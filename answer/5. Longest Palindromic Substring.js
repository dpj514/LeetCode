/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.split('').reverse() === s.split('')) {
        return s;
    }
    let maxlength = 1,
        result = s[0],
        start = 0,
        end = 1,
        arr = [];
    for (let i = 0; i < s.length; i++) {
        arr.push([])
    }
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (s[i] === s[j]) {
                arr[i][j] = 1;
            }
        }

    }
 
    return result;
};


/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

    let maxlen = 1,
        result = s[0],
        start = 0,
        dp = [];
    for (let i = 0; i < s.length; i++) {
        dp.push([])
    }
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (s[i] === s[j]) {
                if(i - j <= 2) {
                    if(i - j +1 > maxlen) {
                    start = j;
                    maxlen = i - j + 1;
                    }
                    dp[j][i] = true;
                }
                else if(dp[j+1][i-1]) {
                    if(i - j + 1 > maxlen) {
                        start = j;
                        maxlen = i - j + 1;
                    }
                    dp[j][i] = true;
                }
            }
        }

    }
    return s.substr(start,maxlen);
};


/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

    s = '#' + s.split('').join('#') + '#';
    let maxRight = 0,
        pos = 0,
        RL = new Array(s.length),
        center = 0,
        maxR = 1;
    for (let i = 0; i < s.length; i++) {
        if (i < maxRight) {
            RL[i] = Math.min(RL[2*pos-i],maxRight-i);
        }
        else {
            RL[i] = 1;
        }
        while(i + RL[i] < s.length && i - RL[i] >= 0 && s[i+RL[i]] === s[i-RL[i]]) {
            RL[i] += 1;
        }
        if (RL[i] + i - 1 > maxRight) {
            maxRight = RL[i] + i - 1;
            pos = i;
        }
        if (RL[i] > maxR) {
            center = i;
            maxR = RL[i];
        }
    }
    return s.slice(center-maxR+1,center+maxR).split('#').join('')
}
