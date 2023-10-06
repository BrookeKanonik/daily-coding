//Instructions:

/*
Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.
*/

//Initial code (works):
//can have all replace alls lined up and return it in one
function correct(string)
{
  string = string.replaceAll('5', 'S')
  string = string.replaceAll('0', 'O')
  string = string.replaceAll('1', 'I')
  return string
}

//Best practice:

correct = s => s.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S')