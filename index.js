function isPalindrome(z)
{
    var x = z.toLowerCase();
    var y = x.split('');
    var z = y.reverse();
    var a = z.join('');
    if (x == a)
    {
        return true;
    }
    else
    {
        return false;
    }
}
function generatePalindrome(s)
{
    if(isPalindrome(s))
    {
        return s;
    }
    else
    {
        var x = s.toLowerCase();
        var y = x.reverse();
        var z = s+y;
        return z;
    }
}

module.exports = generatePalindrome;