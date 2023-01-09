function romanToInt(s: string): number {
    const lib: {[key: string] : number} = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    let solution: number = 0
    for (let idx = 0; idx < s.length; ++idx) {
        if (idx !== s.length - 1 && lib[s[idx]] < lib[s[idx + 1]]) {
            solution += lib[s[idx+1]] - lib[s[idx]]
            ++idx
        } else {
            solution += lib[s[idx]]
        }
    }
    return solution
};