// 1st solution: Combined the arrays and then sort with quickSort
// 2nd solution: Since we know the size of the arrays, start at end of 1st array and add by index

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let nums1Idx = m - 1
    let nums2Idx = n - 1

    for (let i = n + m - 1; i >= 0; --i) {
        if (nums2Idx === -1) {
            break
        } else if (nums1[nums1Idx] >= nums2[nums2Idx]) {
            nums1[i] = nums1[nums1Idx]
            --nums1Idx
        } else {
            nums1[i] = nums2[nums2Idx]
            --nums2Idx
        }
    }
};