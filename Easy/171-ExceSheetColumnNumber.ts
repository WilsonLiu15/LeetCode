function titleToNumber(columnTitle: string): number {
    if(columnTitle.length === 1) return columnTitle.charCodeAt(0) - 64

    let sum = 0
    for(let i = 0; i < columnTitle.length; ++i) {
        sum = 26*sum + (columnTitle.charCodeAt(i) - 64)
    }
    return sum
};