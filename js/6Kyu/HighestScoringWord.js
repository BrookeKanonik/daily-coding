//Instructions:

/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

//Initial Code (works):

function high(x){ //take in a phrase that is a string
    let highest = '' //we need to keep track of the highest valued word
    let count = 0 //to count the total for the word
  //first we will need to seperate the words in the phrase via a split
    x = x.split(' ') //now we have all the words and need to keep track of the total
    for (let i=0; i < x.length; i++){//going through each of the words
      let countInside = 0
      for(let j=0; j < x[i].length; j++){ //going through each letter 
        countInside += x[i][j].charCodeAt( ) -96 //charCodeAt does NOT work unless you subtract to start at 1 for a
        if (j === x[i].length-1){ //if we are on the last character
          if (countInside > count){
            count = countInside; //set the count equal to what we just counted
            highest = x[i]; //set the highest variable to the word;
          }
        }
      }
    }
    return highest
  }
  
  //return which word has the highest value. if two have the same value, return the earliest string
  //for example ('aa', 'b') both have the same points so we need to return the first which is aa

  //Best practice:

  function high(s){
    let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
    return s.split(' ')[as.indexOf(Math.max(...as))];
  }

//Other example:

function high(x){
    let alphabets = [
      'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
      'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];
    
    let words = x.split(" ");
    let highestScore = 0;
    let highestScoreWord = "";
    
    for (let word of words) {
      let lettersSum = 0;
      
      for (let letter of word) {
        lettersSum += alphabets.indexOf(letter) + 1;
      }
      
      if (lettersSum > highestScore) {
        highestScore = lettersSum;
        highestScoreWord = word;
      }
    }
    
    return highestScoreWord;
  }
