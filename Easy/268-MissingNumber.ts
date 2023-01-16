function missingNumber(nums: number[]): number {
    // sum numbers from 0 to nums
    let sum = nums.length * (nums.length + 1) / 2

    // subtract every number from the sum to find the missing value
    for (const num of nums) {
        sum-=num
    }

    return sum
};