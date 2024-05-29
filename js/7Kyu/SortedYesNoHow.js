//Instructions:

/*
function isSortedAndHow(array) {
  //we can take the array and compare a sort method
  if (array.join('') === array.sort((a,b) => a-b).join('')){
    return 'yes, ascending'
  } else if (array.join('') === array.sort((a,b) => b-a).join('')){
    return 'yes, descending'
  } else {
    return "no"
  }
}
*/

//Initial thoughts:

function isSortedAndHow(array) {
    //we can take the array and compare a sort method
    if (array.join('') === array.sort((a,b) => a-b).join('')){
      return 'yes, ascending'
    } else if (array.join('') === array.sort((a,b) => b-a).join('')){
      return 'yes, descending'
    } else {
      return "no"
    }
  }

//Best practice:

function isSortedAndHow(arr) {
    return arr.every((x,i)=>i==0||arr[i]>=arr[i-1])?'yes, ascending':
           arr.every((x,i)=>i==0||arr[i]<=arr[i-1])?'yes, descending':'no'
  }

  const isSortedAndHow = a => {
    const s = a.join``;
    return s === a.sort((x, y) => x - y).join`` ? 'yes, ascending' :
           s === a.sort((x, y) => y - x).join`` ? 'yes, descending' : 'no';
  }