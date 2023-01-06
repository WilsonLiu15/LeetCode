// Without conversion to string
function isPalindrome(x: number): boolean {
    if (x < 0) {
        return false;
    } 

    let reverse = 0
    let origX = x
    while (x) {
        reverse = (reverse*10) + (x - Math.floor(x / 10) * 10) // could ue %, but is slower
        x = Math.floor(x/10)
    }
    return reverse === origX
};