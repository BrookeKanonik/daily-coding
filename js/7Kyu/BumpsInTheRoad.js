//Instructions:

/*
Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead
*/

//Initial code works (O(n) time as it is just a loop):

function bump(x){
    let count = 0
    //x.split('').forEach( element => element === 'n' ? count ++ : 0)
    for (let i=0; i < x.length; i++){
      if (x[i] === 'n'){
        count ++
      }
    }
    return count <= 15 ? "Woohoo!" : "Car Dead"
  }

//Best practice:

const bump=x=>x.split('n').length>16?"Car Dead":"Woohoo!"