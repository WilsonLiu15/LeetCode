/* While-loop version
    function reverseString(s: string[]): void {
        let left = 0
        let right = s.length - 1
        while (left < right) {
            let temp = s[left]
            s[left] = s[right]
            s[right] = temp
            ++left
            --right
        }
    };
*/

function reverseString(s: string[]): void {
    for(let idx = 0; idx < Math.floor(s.length/2); ++idx) {
        let temp = s[idx]
        let rhs = s.length - 1 - idx
        s[idx] = s[rhs]
        s[rhs] = temp
    }
};