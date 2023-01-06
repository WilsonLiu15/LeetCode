// Recursive Solution
function searchInsert(nums: number[], target: number): number {
    let pivot = Math.floor(nums.length/2)
    if (nums[pivot] > target) {
        return searchInsert(nums.slice(0, pivot), target) 
    } else if (nums[pivot] < target) {
        return searchInsert(nums.slice(pivot+1), target) + pivot + 1
    } else {
        return pivot
    }
};

// Iterative Solution
function searchInsert(nums: number[], target: number): number {
    let pivot = Math.floor(nums.length/2)
    let left = 0
    let right = nums.length - 1

    while(left <= right) {
        if(nums[pivot] === target) {
            return pivot
        } else if (nums[pivot] > target) {
            right = pivot - 1
        } else if (nums[pivot] < target) {
            left = pivot + 1
        }
        pivot = Math.floor((left + right) / 2)
    }

    return nums[pivot] > target ? pivot : pivot + 1
};

console.log(searchInsert([1,3,5,6], 2))