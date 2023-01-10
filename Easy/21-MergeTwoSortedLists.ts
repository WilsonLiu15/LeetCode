//  Definition for singly-linked list.
 class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
 }
 

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (list1 === null && list2 === null) {
        return null
    } else if (list1 !== null && list2 !== null) {
        let mergedList: ListNode = new ListNode
        let mergedListPtr = mergedList

        // Insert from both lists until 1 list has been compeltly added
        while(list1 !== null && list2 !== null) {
            if (list1 !== null && list1.val <= list2.val) {
                mergedListPtr.val = list1.val
                list1 = list1.next
            } else if (list2 !== null && list2.val < list1.val) {
                mergedListPtr.val = list2.val
                list2 = list2.next
            }
            mergedListPtr.next = new ListNode
            mergedListPtr = mergedListPtr.next
        }

        // add the rest of the longer list
        if(list1 !== null) {
            mergedListPtr.val = list1.val
            mergedListPtr.next = list1.next
        } else {
            mergedListPtr.val = list2.val
            mergedListPtr.next = list2.next
        }
        return mergedList
    } else {
        return list1 === null ? list2 : list1
    }
};