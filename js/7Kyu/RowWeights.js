//Instructions:

/*
Scenario
Several people are standing in a row divided into two teams.
The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

Task
Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

Notes
Array size is at least 1.
All numbers will be positive.
Input >> Output Examples
rowWeights([13, 27, 49])  ==>  return (62, 27)
Explanation:
The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
Explanation:
The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.

rowWeights([80])  ==>  return (80, 0)
Explanation:
The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.
*/

//Initial code (works, will be O(n) since it has a for loop and goes through values once)

function rowWeights(array){
    let sum1 = 0 //initialize to 0 as in some cases there may just be one num
    let sum2 = 0 //initialized for second team 
    for (let i=0; i<array.length;i++){ //loop through all array values
      if (i % 2 === 0){ //if it is an even index, add it to team 1
        sum1 += array[i]
      }else { //else add the weight to team 2
        sum2 += array[i]
      }
    }
    return [sum1,sum2] //return weights
  }

//Other solutions:

function rowWeights(array){
    var arr = [0, 0];
    for (var i = 0; i < array.length; i++) {
      i % 2 == 0 ? arr[0] += array[i] : arr[1] += array[i];
    }
    return arr;
  }

//Solution that is deemed "best practice" but may take longer to run/is more complicated than the initial code:

function rowWeights(array){
    let t1 = array.filter((x, i)=>i%2==0).reduce((a,item)=>a+item,0);
    let t2 = array.filter((x, i)=>i%2!=0).reduce((a,item)=>a+item,0);
    
    return [t1, t2]
  }