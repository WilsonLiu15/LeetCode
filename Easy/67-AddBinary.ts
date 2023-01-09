function addBinary(a: string, b: string): string {
    let solution: string = ''
    let carryBit: string = '0'

    const longestBinaryString = Math.max(a.length, b.length);
    for (let idx = 0; idx < longestBinaryString; ++idx) {
        const aBit = a.length > idx ? a[a.length - 1 - idx] : '0' 
        const bBit = b.length > idx ? b[b.length - 1 - idx] : '0'

        if (aBit === '1' && bBit === '1' && carryBit === '1') {
            carryBit = "1"
            solution = "1" + solution
        } else if (aBit === '0' && bBit === '0' && carryBit === '0') {
            carryBit = "0"
            solution = "0" + solution
        } else if ((carryBit === '1' && (aBit === '1' || bBit === '1'))
            || (carryBit === '0' && aBit === '1' && bBit === '1')) {
            carryBit = "1"
            solution = "0" + solution
        } else {
            carryBit = "0"
            solution = "1" + solution 
        }
    }

    if (carryBit === '1') { solution = carryBit + solution }

    return solution
};
console.log(addBinary("100", "110010"))