function compareSides(leftTree: TreeNode | null, rightTree: TreeNode | null): boolean {
    if(rightTree === null && leftTree === null) {
        return true
    } else if (rightTree === null || leftTree === null || rightTree.val !== leftTree.val) {
        return false
    } else {
        return compareSides(leftTree.left, rightTree.right) && compareSides(leftTree.right, rightTree.left) 
    }

}

function isSymmetric(root: TreeNode | null): boolean {
    return compareSides(root.left, root.right)
};