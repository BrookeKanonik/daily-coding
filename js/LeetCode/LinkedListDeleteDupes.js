//Instructions:

/*
Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

 

Example 1:


Input: head = [1,1,2]
Output: [1,2]
Example 2:


Input: head = [1,1,2,3,3]
Output: [1,2,3]
 

Constraints:

The number of nodes in the list is in the range [0, 300].
-100 <= Node.val <= 100
The list is guaranteed to be sorted in ascending order.
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
 * @param {ListNode} head
 * @return {ListNode}
 */


var deleteDuplicates = function(head) {
    let items = new Set ()
    let curr = head;
    let prev = null
    while(curr !== null) {
        if (!items.has(curr.val)){
            items.add(curr.val)
            if (prev !== null) prev.next = curr;
            prev = curr
        }
        curr = curr.next
    }
    if (prev !== null) prev.next = curr
    return head 
};

//Other solutions:

var deleteDuplicates = function(head) {
    // Special case...
    if(head == null || head.next == null)
        return head;
    // Initialize a pointer curr with the address of head node...
    let curr = head;
    // Traverse all element through a while loop if curr node and the next node of curr node are present...
    while( curr != null && curr.next != null){
        // If the value of curr is equal to the value of prev...
        // It means the value is present in the linked list...
        if(curr.val == curr.next.val){
            // Hence we do not need to include curr again in the linked list...
            // So we increment the value of curr...
            curr.next = curr.next.next;
        }
        // Otherwise, we increment the curr pointer...
        else{
            curr = curr.next; 
        }
    }
    return head;        // Return the sorted linked list without any duplicate element...
};