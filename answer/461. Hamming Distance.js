var hammingDistance = function(x, y) {
    var a = x^y;
    var b = a.toString(2);
    var c = 0;
    for(i=0;i<=b.length;i++) {
        if (b[i]=="1") {
            c++;
        }
    }
    return c;
    
};