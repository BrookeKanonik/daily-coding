//Instructions:

/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

 

Example 1:


Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
 

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order
*/

//Initial code (works):

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    const dummy = new ListNode(-Infinity);
    let prev = dummy; //reference to the dummy bc that is what we are going to return 
    
    while(list1 && list2){
        if (list1.val <=list2.val){
            prev.next = list1; //if list 1 val is smaller, point to list1
            prev = list1;
            list1 = list1.next //going to the next item
        }else {
            prev.next = list2 //pointing
            prev = list2; //moves
            list2 = list2.next //moves list 2 to next item
        }
    }

    if(!list1) prev.next = list2
    if(!list2) prev.next = list1
    return dummy.next; //not including initial value we place since we are doing a .next
};

//Memory = Constant 
//Time = Linear