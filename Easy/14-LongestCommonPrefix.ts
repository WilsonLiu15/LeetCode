function longestCommonPrefix(strs: string[]): string {  
    let prefix = ""

    if (strs.length === 1) {
        return strs[0]
    }

    // find the shortest string 
    let shortestWord = strs.reduce((currentWord, smallestWord) => {
        return currentWord.length <= smallestWord.length ? currentWord : smallestWord
    })

    // compare every string letter by letter with the smallest string
    for (let idx = 0; idx < shortestWord.length; ++idx) {
        if (strs.every((word) => word[idx] === shortestWord[idx])) {
            prefix += shortestWord[idx]
        } else {
            break
        }
    }

    return prefix
};