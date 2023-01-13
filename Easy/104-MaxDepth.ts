function maxDepth(root: TreeNode | null): number {
    if(root === null) {
        return 0
    }

    const lhsDepth = maxDepth(root.left)
    const rhsDepth = maxDepth(root.right)
 
    return lhsDepth >= rhsDepth ? lhsDepth + 1 : rhsDepth + 1
}