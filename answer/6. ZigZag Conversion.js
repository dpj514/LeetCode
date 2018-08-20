/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    
    if (numRows === 1) {
        return s;
    }
    
    let row = 0,
        col = 0,
        direction = 'down',
        arrs = [],
    result = '';
    for (let i = 0; i < s.length; i++) {
        
            arrs[row] ? arrs[row] += s[i] : arrs[row] = s[i];
        if (i / (numRows - 1) % 2 === 1) {
            direction = 1;
        }
        else if (i / (numRows - 1) % 2 === 0) {
            direction = 0;
        }
     if (direction === 1) {
        row--;
        col++;
    }
    else {
        row++;
    }
}
        
    for (const s of arrs) {
        result += s;
    }
    return result;
};