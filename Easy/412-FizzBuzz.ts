function fizzBuzz(n: number): string[] {
    let words: string[] = []
    for(let i = 0; i < n; ++i) {
        words.push("")
        if ((i+1) % 3 === 0) words[i]+="Fizz"
        if ((i+1) % 5 === 0) words[i]+="Buzz"
        if (words[i] === "") words[i] = (i+1).toString()
    }
    return words
};