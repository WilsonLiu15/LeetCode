function factorial(n: number) {
    let factorial= 1
    for (let num = 2; num <= n; ++num) {
        factorial *= num
    }
    return factorial
}

function climbStairs(n: number): number {
    let numPermutations = 1

    for (let numOfTwos = 1; numOfTwos <= Math.floor(n / 2); ++numOfTwos) {
        numPermutations += factorial(n-numOfTwos)/(factorial(numOfTwos)*factorial(n-(2*numOfTwos)))
    }

    return numPermutations
}