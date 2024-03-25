//Instructions:

/*
A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. Each book has a code c of 3, 4, 5 or more characters. The 1st character of a code is a capital letter which defines the book category.

In the bookseller's stocklist each code c is followed by a space and by a positive integer n (int n >= 0) which indicates the quantity of books of this code in stock.

For example an extract of a stocklist could be:

L = {"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"}.
or
L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"] or ....
You will be given a stocklist (e.g. : L) and a list of categories in capital letters e.g :

M = {"A", "B", "C", "W"} 
or
M = ["A", "B", "C", "W"] or ...
and your task is to find all the books of L with codes belonging to each category of M and to sum their quantity according to each category.

For the lists L and M of example you have to return the string (in Haskell/Clojure/Racket/Prolog a list of pairs):

(A : 20) - (B : 114) - (C : 50) - (W : 0)
where A, B, C, W are the categories, 20 is the sum of the unique book of category A, 114 the sum corresponding to "BKWRK" and "BTSQZ", 50 corresponding to "CDXEF" and 0 to category 'W' since there are no code beginning with W.

If L or M are empty return string is "" (Clojure/Racket/Prolog should return an empty array/list instead).

Notes:
In the result codes and their values are in the same order as in M.
See "Samples Tests" for the return.
*/

//Initial code (works):

function stockList(listOfArt, listOfCat){
    let none = 0
    let res = ''
    let numbers = listOfArt.join(' ')
    numbers = numbers.split(' ').filter((element, index) => index % 2).map(element => Number(element))
    for (let i=0; i< listOfCat.length; i++){
      let curr = 0
      for (let j=0; j<listOfArt.length; j++){
        if (listOfArt[j][0].includes(listOfCat[i])){
          curr += numbers[j]
        }
       
      }
       res += `(${listOfCat[i]} : ${curr}) - `
       if (curr === 0){
         none ++     
       }
    }
    return none === listOfCat.length ? '' : res.slice(0,-3)
  }

//Best practice:

function stockList(listOfArt, listOfCat) {
    var qs = {};
    if (!listOfArt.length) return '';
  
    listOfArt.forEach(function(art) {
      var cat = art[0];
      qs[cat] = (qs[cat] | 0) + +art.split(' ')[1];
    });
  
    return listOfCat.map(function(c) {
      return '(' + c + ' : ' + (qs[c] | 0) + ')';  
    }).join(' - ');  
  }

/*
Bitwise OR qs[cat] with 0. This returns the value of qs[cat] if it is not undefined, else it returns 0.
Ex: 42 | 0 would return 42. But undefined | 0 would return 0.
Split the art string to an array and get the number which would be at 1st index after splitting.
The number is currently in string, so convert it into number by prepending with +. It would be similar to parseInt(art.split(' ')[1])
Sum the above two values.
Store it in qs[cat]
*/