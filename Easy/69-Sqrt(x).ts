/*
Brute Force: No square root will be greater than half the value of x, so just do i*i until the middle value

Better Way: Use binary search, with the rhs being x/2 and then find the best whole number
*/

function mySqrt(x: number): number {
    if (x < 2) return x
 
    let l = 0
    let r = x/2
    let currentBestRoot = 0
    while(l <= r) {
        let possibleRoot = Math.floor((l+r)/2)
        let possibleRootProduct = possibleRoot*possibleRoot

        if(possibleRootProduct === x) {
            return possibleRoot
        } else if (possibleRootProduct > x) {
            r = possibleRoot - 1
        } else {
            l = possibleRoot + 1
        }

        if (possibleRootProduct < x && possibleRootProduct > currentBestRoot) {
            currentBestRoot = possibleRoot
        }
    }
    return currentBestRoot
};