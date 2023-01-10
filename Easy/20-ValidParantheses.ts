function isValid(s: string): boolean {
    let stack: string[] = []
    let brackets : {[key: string]: string} = {
        ")": "(",
        "}": "{",
        "]": "[",
    }

    for(let idx = 0; idx < s.length; ++idx) {
        if(stack.length === 0) {
            stack.push(s[idx])
        } else {
            (stack[stack.length - 1] === brackets[s[idx]]) ? stack.pop() : stack.push(s[idx])
        }
    }
    return stack.length === 0
};