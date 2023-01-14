function hammingWeight(n: number): number {
    let totalNumOnes = 0
    while(n !== 0) {
        totalNumOnes += n % 2
        n = Math.floor(n/2)
    }
    return totalNumOnes
};