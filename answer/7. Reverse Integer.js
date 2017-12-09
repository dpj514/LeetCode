/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if(x === 0) {
        return 0;
    }
    
    else if (x >0) {
        let result = + String(x).split('').reverse().join('')
        return result > 2147483647 ? 0 : result;
    }
    
    else {
        let result = - String(-x).split('').reverse().join('')
        return result < -2147483647 ? 0 : result;
         
    }
    
};