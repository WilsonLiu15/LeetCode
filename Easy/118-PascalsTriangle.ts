function generateLevel(row: number[]): number[] {
    let newRow: number[] = [1]
    for(let i = 1; i < row.length; ++i) {
        newRow.push(row[i-1] + row[i])
    }
    newRow.push(1)
    return newRow
}
function generate(numRows: number): number[][] {
    if(numRows === 1) {
        return [[1]]
    } else if (numRows === 2) {
        return [[1], [1,1]]
    } 

    let pascalsTriangle: number[][] = [[1], [1,1]]
    for(let i = 1; i < numRows - 1; ++i) {
        pascalsTriangle.push(generateLevel(pascalsTriangle[i]))
    }
    return pascalsTriangle
};