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
    while(arrs.push([]) < numRows);
    for (let i = 0; i < s.length; i++) {
        if (i / (numRows - 1) % 2 === 1) {
            direction = 'up';
        }
        else if (i / (numRows - 1) % 2 === 0) {
            direction = 'down';
        }
        arrs[row][col] = s[i];
     if (direction === 'up') {
        row--;
        col++;
    }
    else {
        row++;
    }
}
        
    for (const arr of arrs) {
        result += arr.join('');
    }
    return result;
};
console.log(convert("PSIPYAI", 3))