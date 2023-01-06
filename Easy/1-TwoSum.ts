function twoSum(nums: number[], target: number): number[] {
    let solution: number[] = []
    let processedNums: { [key: number]: number } = {}

    for(let idx=0; idx < nums.length; ++idx) {
        if (processedNums[target - nums[idx]] !== undefined) {
            solution = [processedNums[target - nums[idx]], idx]
            break
        } 
        processedNums[nums[idx]] = idx
    }
    return solution
};