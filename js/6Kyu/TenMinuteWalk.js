//Instructions:

/*
You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).
*/

//Initial code (works):

function isValidWalk(walk) {
    if (walk.length === 10){
      let n = 0
      let w = 0
      let e = 0
      let s = 0
      for (let i = 0; i < 10; i++){
        if (walk[i] === 'n'){
          n++ 
        } else if (walk[i] === 'e'){
          e++
        } else if (walk[i] === 'w'){
          w--
        }else {
          s--
        }
      }
      if ((n + w + e + s === 0) && ( Math.abs(n) === Math.abs(s)) && (Math.abs(e) === Math.abs(w))){
        return true
      }else {
        return false
      }
    } else {
      return false
    }
  }

//Best practice:

function isValidWalk(walk) {
    var dx = 0
    var dy = 0
    var dt = walk.length
    
    for (var i = 0; i < walk.length; i++) {
      switch (walk[i]) {
        case 'n': dy--; break
        case 's': dy++; break
        case 'w': dx--; break
        case 'e': dx++; break
      }
    }
    
    return dt === 10 && dx === 0 && dy === 0
  }