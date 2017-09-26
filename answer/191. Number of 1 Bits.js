var hammingWeight = function(n) {
    var a = n.toString(2);
    var b = 0;
    for(i=0;i<=a.length;i++) {
        if(a[i]=="1") {
            b++;
        }
    }
    return b;
};