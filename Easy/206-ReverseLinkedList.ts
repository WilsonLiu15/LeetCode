// Recursive Implementation
function reverseList(head: ListNode | null): ListNode | null {
    if(head === null || head.next === null) return head

    let reverseHead = reverseList(head.next)
    head.next.next = head
    head.next = null
    return reverseHead
};

// In Place Implemetation (Iterative)
function reverseList(head: ListNode | null): ListNode | null {
    if(head === null || head.next === null) return head

    let nextNode = head.next
    let temp: ListNode
    
    head.next = null
    while(nextNode !== null) {
        temp = nextNode.next
        nextNode.next = head
        head = nextNode
        nextNode = temp
    }
    return head
};

// Extra Array Implementatioin (Iterative)
function reverseList(head: ListNode | null): ListNode | null {
    if(head === null || head.next === null) return head

    let nodeValues: number[] = []
    while(head !== null) {
        nodeValues.push(head.val)
        head = head.next
    }

    let reverseHead: ListNode = null
    for(let i = 0; i < nodeValues.length; ++i) {
        const current = new ListNode(nodeValues[i])
        current.next = reverseHead;
        reverseHead = current;
    }
    return reverseHead
};