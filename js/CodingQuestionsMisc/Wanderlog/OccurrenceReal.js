//Instructions:

/*
or a given array of transactions, group all of the transactions by item name. Return an array of strings where each string contains the item name followed by a space and the number of associated transactions.

Note: Sort the array descending by transaction count, then ascending alphabetically by item name for items with matching transaction counts.

Example
transactions = ['notebook', 'notebook', 'mouse', 'keyboard', 'mouse']

There are two items with 2 transactions each: 'notebook' and 'mouse'. In alphabetical order, they are 'mouse', 'notebook'.

There is one item with 1 transaction: 'keyboard'.

The return array, sorted as required, is ['mouse 2', 'notebook 2', 'keyboard 1'].

Function Description
Complete the function groupTransactions in the editor below.

groupTransactions has the following parameter(s):

    string transactions[n]: each transactions[i] denotes the item name in the i^th^ transaction

Returns:

    string[]: an array of strings of "item name[space]transaction count" sorted as described

Constraints
1 ≤ n ≤ 10^5^
1 ≤ length of transactions[i] ≤ 10
transactions[i] contains only lowercase English letters, ascii[a-z]
Input Format for Custom Testing
Input from stdin will be processed as follows and passed to the function.

The first line contains a single integer, n, the size of transactions.
Each of the next n lines contains a string, the item name for transactions[i].
Sample Case 1
Sample Input
Copy
STDIN     Function
-----     -----
4      →  transactions[] size n = 4
bin    →  transactions = ['bin', 'can', 'bin', 'bin']
can
bin
bin
Sample Output
Copy
bin 3
can 1
Explanation
There is one item 'bin' with 3 transactions.
There is one item 'can' with 1 transaction.
The return array sorted descending by transaction count, then ascending by name is ['bin 3', 'can 1'].
Sample case 2
Sample Input
Copy
STDIN     Function
-----     -----
3      →  transactions[] size n = 3
banana →  transactions = ['banana', 'pear', 'apple']
pear
apple
Sample Output
Copy
apple 1
banana 1
pear 1
Explanation
There is one item 'apple' with 1 transaction.
There is one item 'banana' with 1 transaction.
There is one item 'pear' with 1 transaction.
The return array sorted descending by transaction count, then ascending by name is ['apple 1', 'banana 1', 'pear 1'].
*/

/*
# Introduction

Thank you for your interest in working with Wanderlog — I’ve really enjoyed working with our talented team of engineers to making traveling easier and less expensive over the last 5 years, and am excited you’re interested in joining the team!

DMOJ (https://dmoj1.wanderlog.com) is our code assessment tool: it’s similar to Hackerrank and Leetcode, and hosts:

- Problem descriptions, and
- An online judge that can automatically grade your solutions

<aside>
❗ **Note:** Please avoid using LLMs like **ChatGPT** and **turn off GitHub Copilot** when solving these problems; we use them too in real programming, but we'd
like to see how you're able to solve problems without them!

</aside>

# Steps

1. [Sign up](https://dmoj1.wanderlog.com/accounts/register/) for an account: you’ll get a confirmation email
2. Start our “[Practice assessment](https://dmoj1.wanderlog.com/contest/starthere)” contest, which is ungraded and will let you try out the platform
    1. Read through each problem: each problem will generally have:
        1. Problem description
        2. Test cases
        3. Link to boilerplate code that you can download
3. After downloading the boilerplate code, you can:
    1. **Open the code** of your preferred language (Java, Python 2 or 3, or Javascript) in your preferred code editor
    2. **Edit the code parts** that mention e.g., `// Write your code here` or `# Write your code here`
    3. **Run tests** locally by running the corresponding line for your language:
        
        ```bash
        bash [run-tests.sh](http://run-tests.sh) javascript
        bash [run-tests.sh](http://run-tests.sh) java
        bash [run-tests.sh](http://run-tests.sh) python2
        bash [run-tests.sh](http://run-tests.sh) python3
        ```
        
        - These will run your code with the test cases in the `testCases` folder of the zip, and give you a command you can use to re-run those test cases if they fail
4. After your code passes all test cases, upload your code by pressing the “Submit solution” button in the right top corner.
    1. Select your language
    2. If the “Judging” page gets stuck, refresh it
5. If you’re finished a problem, go on to the next one by clicking “Problems” at the top bar, or visiting https://dmoj1.wanderlog.com/problems
6. If you’re done all the problems, you’re good to go!
7. Once you’re familiar with the platform, **start our timed assessment at https://dmoj1.wanderlog.com/contests/**
*/

//Initial code (timed):

function occur(names){
    let stored = {}
    for (let i=0; i<names.length; i++){
        if(stored[names[i]]!== undefined){
            stored[names[i]] += 1 //update val
        }else{
            stored[names[i]] = 1
        }
    } //create an object to store how many times weve seen the items
    let converts = Object.keys(stored).map(key => [key, stored[key]]).sort(function(a,b){
        if (a[1] === b[1]){
            return a[0] - b[0]
        }else{
            return b[1] - a[1]
        }
    })
    .map(element => {
        return String(element.flat()).replaceAll(',',' ')
    })

    //[['apples',2] , ['bananas',2]]

    return converts
}