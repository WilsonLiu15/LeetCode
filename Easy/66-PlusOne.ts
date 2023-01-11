function plusOne(digits: number[]): number[] {
    if(digits[digits.length - 1] === 9){
        let hasCarryBit: Boolean = true
        digits[digits.length - 1] = 0

        for(let i = digits.length - 2; i >= 0; --i) {
            if (digits[i] === 9) {
                hasCarryBit = true
                digits[i] = 0
            } else {
                hasCarryBit = false
                ++digits[i]
                break;
            }
        }

        if(hasCarryBit) digits.unshift(1)
    } else {
        ++digits[digits.length - 1]
    }
    return digits
};