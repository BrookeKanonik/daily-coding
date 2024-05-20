//Instructions:

/*
Problem boilerplate code and test cases, on Google Drive

Instructions for using DMOJ, for reference

Problem
Application logs are used in analysis of interactions with an application and may be used to detect specific actions. 

A log file is provided as a string array where each entry is in the form "user_id timestamp action". Each of the values is separated by a space.

Both user_id and timestamp consist only of digits, are at most 9 digits long and start with a non-zero digit.
timestamp represents the time in seconds since the application was last launched
action will be either "sign-in" or "sign-out"
Given a log with entries in no particular order, return an array of strings that denote user_id's of users who signed out in maxSpan seconds or less after signing in. 

Example
n = 7

logs = ["30 99 sign-in", "30 105 sign-out", "12 100 sign-in", "20 80 sign-in", "12 120 sign-out", "20 101 sign-out", "21 110 sign-in"]

maxSpan = 20

Copy
ID  Sign in  Sign out  Time delta
--  -------  --------  ----------
30  99       105       6
12  100      120       20
20  80       101       21
21  110
The users with id's 30 and 12 were not signed in for more than maxSpan = 20 seconds.  In sorted numerical order, the return array is ["12", "30"].

Function Description
Complete the function processLogs in the editor below.

The function has the following parameter(s):

    string logs[n]: each logs[i] denotes the i^th^ entry in the logs

    int maxSpan: the maximum difference in seconds between when a user logs in and logs out for the user to be included in the result

Returns:

    string[]: a string array of user id's, sorted ascending by numeric value

Constraints
1 ≤ n, maxSpan ≤ 
1 ≤ maxSpan ≤ n
Each user_id contains only characters in the range ascii['0'-'9'], is at most 9 digits long and starts with a non-zero digit.
Each timestamp contains only characters in the range ascii['0'-'9'] and begins with a non-zero digit
0 < timestamp ≤ 
Each action is either "sign-in" or "sign-out".
Each user_id's sign-in timestamp < sign-out timestamp
Each user signs in for only 1 session. 
The result will contain at least one element.
Input format for custom testing
Input from stdin will be processed as follows and passed to the function.

The first line contains an integer, n, the size oflogs.
Each of the next n lines contains a log file entry, logs[i].
The last line contains a single integer, maxSpan.
Sample case 1
Sample Input
Copy
STDIN                Function
-----                --------
6               →    logs[] size n = 6
99 1 sign-in    →    logs = ["99 1 sign-in","100 10 sign-in","50 20 sign-in","100 15 sign-out","50 26 sign-out","99 2 sign-out"]
100 10 sign-in
50 20 sign-in
100 15 sign-out
50 26 sign-out
99 2 sign-out
5               →    maxSpan = 5
Sample Output
Copy
99
100
Explanation
Copy
ID  Sign in  Sign out  Time delta
--  -------  --------  ----------
50  20       26         6
99  1        2          1
100 10       15         5
The users with id's 99 and 100 were not signed in for more than maxSpan = 5 seconds.  In sorted numerical order, the return array is ["99", "100"].

Sample case 2
Sample Input
Copy
STDIN              Function
-----              --------
4               →  logs[] size n = 4
60 12 sign-in   →  logs = ["60 12 sign-in","80 20 sign-out","10 20 sign-in","60 20 sign-out"]
80 20 sign-out
10 20 sign-in
60 20 sign-out
100             →  maxSpan = 100
Sample Output
Copy
60
Explanation
Copy
ID  Sign in  Sign out  Time delta
--  -------  --------  ----------
10  20              
60  12        20        8
80  20
Only user id 60 has signed out and was not signed in for more than maxSpan = 100 seconds.  The return array is ["60"].
*/

//

//convert the logs to be their own array

function processLogs(logs,maxSpan){
    let res = []
    let storeVals = {} //create a map to store the sign in and sign out time
    for (let i=0; i<logs.length; i++){ //going through each log
        //sign out is bigger than sign in
        //see if the id matches what we have in our hash map. i am looking at a string so...
        let curr = logs[i].split(' ') //we will have ['99', '1' ,'signin']
        if (storeVals[curr[0]] !== undefined){
            if (Math.abs(storeVals[curr[0]] - curr[1]) <= maxSpan){ //if 100 and 90
                res.push(curr[0])
            }
        }else {
            storeVals[curr[0]] = curr[1] //set it up if it is not the case
        }
    }
    return res.sort((a,b)=> a-b)
}