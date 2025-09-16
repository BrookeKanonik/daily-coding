//Instructions:

/*You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.*/

//Initial thoughts to think on:

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

let newList = new LinkedList()
let firstNum = ''
let secondNum = ''
var addTwoNumbers = function(l1, l2) {
    //go through whichever is longer
    let longest = 0;
    if (l1.length > l2.length){
        longest = l1
    }else{
        longest = l2 //can write as terinary operator 
    }

    for (i=0; i < longest.length; i++){
        l1[i] == undefined ? firstNum += 0 : firstNum += l1[i]
        l2[i] == undefined ? secondNum += 0 : secondNum += l2[i]
    } //go through each and add
    firstNum = parseInt(firstNum)
    secondNum = parseInt(secondNum)
    newTotal = firstNum + secondNum

    for (i=0; i < newTotal.length; i++){
        newList.append(newTotal[i])
    }
    return newList

    //rewrite with head, next and tail
};

//Recent work:

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

let newList = new LinkedList()
let firstNum = ''
let secondNum = ''
var addTwoNumbers = function(l1, l2) {
    //go through whcihever is longer
    // let longest = 0;
    // if (l1.size > l2.size){
    //     longest = l1
    // }else{
    //     longest = l2 //can write as terinary operator 
    // }
    // console.log(longest.size)
    while (l1 || l2){
        console.log(l1.val)
        l1.val == undefined ? firstNum += 0 : firstNum += l1.val
        l2.val == undefined ? secondNum += 0 : secondNum += l2.val

        l1 = l1.next;
        l2 = l2.next;
    } //go through each and add
    firstNum = parseInt(firstNum)
    secondNum = parseInt(secondNum)
    newTotal = firstNum + secondNum

    console.log(newTotal)
    
    //make this number a linked list NEED TO WORK ON
    newList.head = newTotal[newTotal.length-1] //first part
    for (let i=newTotal.length -2; i>=0; i--){
        newList.append = newTotal[i]
        newList = newList.next;
    }

    return newList

    //rewrite with head, next and tail

    
    
};