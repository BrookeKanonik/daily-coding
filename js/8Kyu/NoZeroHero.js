//Instructions:

/*
Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Zero alone is fine, don't worry about it. Poor guy anyway
*/

//Initial code (works):

function noBoringZeros(n) {
    n = String(n)
   let distance = 0
   for (let i= n.length-1; i >= 0 ; i--){
     if (n[i] === '0'){
       console.log(n[i])
       distance --
     } else {
       break;
     }
   }
   if (distance !== 0) {
     return Number(n.slice(0,distance))
     } else {
       return Number(n)
     }
 }