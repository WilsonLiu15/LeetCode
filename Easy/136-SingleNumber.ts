function singleNumber(nums: number[]): number {
    let solution = 0
    for(let idx = 0; idx < nums.length; ++idx) {
        solution ^= nums[idx]
    }
    return solution
};