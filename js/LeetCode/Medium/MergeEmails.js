// Instructions:

/*
Given a list of accounts where each element accounts[i] is a list of strings, where the first element accounts[i][0] is a name, and the rest of the elements are emails representing emails of the account.

Now, we would like to merge these accounts. Two accounts definitely belong to the same person if there is some common email to both accounts. Note that even if two accounts have the same name, they may belong to different people as people could have the same name. A person can have any number of accounts initially, but all of their accounts definitely have the same name.

After merging the accounts, return the accounts in the following format: the first element of each account is the name, and the rest of the elements are emails in sorted order. The accounts themselves can be returned in any order.

 

Example 1:

Input: accounts = [["John","johnsmith@mail.com","john_newyork@mail.com"],["John","johnsmith@mail.com","john00@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]
Output: [["John","john00@mail.com","john_newyork@mail.com","johnsmith@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]
Explanation:
The first and second John's are the same person as they have the common email "johnsmith@mail.com".
The third John and Mary are different people as none of their email addresses are used by other accounts.
We could return these lists in any order, for example the answer [['Mary', 'mary@mail.com'], ['John', 'johnnybravo@mail.com'], 
['John', 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com']] would still be accepted.
Example 2:

Input: accounts = [["Gabe","Gabe0@m.co","Gabe3@m.co","Gabe1@m.co"],["Kevin","Kevin3@m.co","Kevin5@m.co","Kevin0@m.co"],["Ethan","Ethan5@m.co","Ethan4@m.co","Ethan0@m.co"],["Hanzo","Hanzo3@m.co","Hanzo1@m.co","Hanzo0@m.co"],["Fern","Fern5@m.co","Fern1@m.co","Fern0@m.co"]]
Output: [["Ethan","Ethan0@m.co","Ethan4@m.co","Ethan5@m.co"],["Gabe","Gabe0@m.co","Gabe1@m.co","Gabe3@m.co"],["Hanzo","Hanzo0@m.co","Hanzo1@m.co","Hanzo3@m.co"],["Kevin","Kevin0@m.co","Kevin3@m.co","Kevin5@m.co"],["Fern","Fern0@m.co","Fern1@m.co","Fern5@m.co"]]
 

Constraints:

1 <= accounts.length <= 1000
2 <= accounts[i].length <= 10
1 <= accounts[i][j].length <= 30
accounts[i][0] consists of English letters.
accounts[i][j] (for j > 0) is a valid email.
*/

//Code:

function accountsMerge(accounts){
    const users = new Set() //adding unique users
    const emailUserMap = new Map()
    const merge = (userFrom, userTo) => {
        if (userFrom === userTo) return; //incase we merge two that are the exact same 
        users.delete(userFrom) //delete a user 

        for (let email of userFrom[1]){ //go through all of the emails
            emailUserMap.set(email, userTo) //set the email as key and userTo as the value 
            userTo[1].add(email) //adding 
        }
    }

    for (let account of accounts){
        const [name, ...emails] = account
        const user = [name, new Set()] //user is set to an array of name and an empty set 
        users.add(user);
        for (let email of emails){ //going through all of the emails
            if(emailUserMap.has(email)){ 
                merge(emailUserMap.get(email), user) //if we have this email, merge 
            } else {
                emailUserMap.set(email, user) //set the map with the email as key and user as the value
                user[1].add(email) //look at the 1st index and add the email
            }
        }
    }

    const result = []

    for (let user of users){
        const list = [...user[1]].sort() //need to sort the emails as per the instructions
        list.unshift(user[0])
        result.push(list)
    }

    return result
}