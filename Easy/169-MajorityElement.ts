function majorityElement(nums: number[]): number {
    if (nums.length === 1) return nums[0]

    let countFreq: Map<number, number> = new Map
    for (let i = 0; i < nums.length; ++i) {
        let currentNumber = nums[i]
        let currentCount = countFreq.get(currentNumber)
        if(currentCount === undefined) {
            countFreq.set(currentNumber, 1) 
        } else {
            countFreq.set(currentNumber, currentCount + 1)
            if (countFreq.get(currentNumber) > nums.length/2) {
                return nums[i]
            }
        }
    }
};