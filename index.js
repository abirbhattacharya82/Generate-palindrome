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
function main()
{
    console.log("Home");
}
module.exports = generatePalindrome;
module.exports = isPalindrome;
module.exports = main;