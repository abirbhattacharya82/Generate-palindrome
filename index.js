function generatePalindrome(s) {
    var x = s.reverse();
    if (s == x) {
        return s;
    }
    else
    {
        var z=s+x;
        return z;
    }
}
export default generatePalindrome;