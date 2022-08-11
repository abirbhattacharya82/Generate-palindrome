function generatePalindrome(s) {
    var x="";
    for(var i=0;i<s.length;i++)
    {
        x=s[i]+x;
    }
    if(x==s)
    {
        return s;
    }
    else
    {
        var z=s+x;
        return z;
    }
}
module.exports= generatePalindrome;