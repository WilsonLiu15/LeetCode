// Cleaner solution
function removeDuplicates(nums: number[]): number {
    for (let i = 0; i < nums.length - 1; ++i) {
        if(nums[i] === nums[i+1]) {
            nums.splice(--i, 1)
        }
    }
    return nums.length
};

// solution without syntactical sugar is more efficent
// function removeDuplicates(nums: number[]): number {
//     if(nums.length === 1) {
//         return 1
//     }
//     for (let i = 0; i < nums.length - 1; ++i) {
//         if(nums[i] === nums[i+1]) {
//             nums.splice(i, 1)
//             --i
//         }
//     }
//     return nums.length
// };
