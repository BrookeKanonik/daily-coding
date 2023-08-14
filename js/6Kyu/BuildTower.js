//Instructions

/*
Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
*/

//Initial code (works):

function towerBuilder(nFloors) {
    let empty = nFloors - 1
    let array = []
    if (nFloors === 1){
      array.push('*')
      return array //note: cannot do return array.push('*') it must be two seperate lines
    } else {    
      for (let i = 1; i <= nFloors; i++){
         let str = ''
        for (let j = 1; j <= empty; j++){
          str += ' '       
        }      
        empty --
        array.push(`${str}${'*'.repeat(2*i-1)}${str}`)       
    }
    return array    
    }  
  }

//Best practices:

function towerBuilder(n) {
    return Array.from({length: n}, function(v, k) {
      const spaces = ' '.repeat(n - k - 1);
      return spaces + '*'.repeat(k + k + 1) + spaces;
    });
  }

function towerBuilder(nFloors) {
    var tower = [];
    for (var i = 0; i < nFloors; i++) {
      tower.push(" ".repeat(nFloors - i - 1)
               + "*".repeat((i * 2)+ 1)
               + " ".repeat(nFloors - i - 1));
    }
    return tower;
  }

//Danny's solution:

function towerBuilder(nFloors) {
    const tower = [];
    let floor = "*"
    let padding = ''
    padding = padding + ' '.repeat(nFloors-1);
    for (let i=0; i < nFloors; i++){
      let level = padding + floor + padding;
      tower.push(level);
      floor = floor + "**"
      padding = padding.slice(1);
    }
    return tower;
  }