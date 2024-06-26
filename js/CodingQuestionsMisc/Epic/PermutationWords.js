//Instructions:

/*
Get a string(word) from user, then make every possible permutation words. Ex)intput: tree => output : tree, rtee, rete, reet, etre, eetr, eert, eter, eret, teer, reet..
*/

//Initial code:

//need to start from the first letter and then rearrange the following ones. ensure no duplicates.

// function permuteWords(word){
//     let storedWords = []
//     for (let i=0; i<word.length; i++){
//         //store the words somehow 
//         let lettersSoFar = []
//     }
// }

//Solution (and reference):
function biggerFunc(nums){
    const arrayOfArraysOfPermutations = permute(nums);
    for (let k = 0; k <arrayOfArraysOfPermutations.length; k++){
        arrayOfArraysOfPermutations[k] = arrayOfArraysOfPermutations[k].join('')
    }
    return [...new Set (arrayOfArraysOfPermutations)]; //will return an array with values if wanting to make a string add .join(' ')
}

function permute(nums) {
    let result = [];
    if (nums.length === 0) return [];
    if (nums.length === 1) return [nums];
    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const remainingNums = nums.slice(0, i).concat(nums.slice(i +  1));
        const remainingNumsPermuted = permute(remainingNums);
        for (let j = 0; j < remainingNumsPermuted.length; j++) {
            const permutedArray = [currentNum].concat(remainingNumsPermuted[j]);
            result.push(permutedArray);
        }
    }
    return result;
}

console.log(biggerFunc('hey'))

/* https://medium.com/weekly-webtips/step-by-step-guide-to-array-permutation-using-recursion-in-javascript-4e76188b88ff */

//Additional code:

// let str = 'let'
let permutation = (str, result) => {
    if (str.length == 0){
        console.log(result)
    }
    for (let i=0; i<str.length; i++){
        let rest = str.substring(0,i) + str.substring(i+1)
        permutation(rest, result + str[i])
    }
}
permutation(str, '')

