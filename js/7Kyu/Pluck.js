//Instructions:

/*
Implement a function which takes a sequence of objects and a property name, and returns a sequence containing the named property of each object.

For example:

pluck([{a:1}, {a:2}], 'a')      // -> [1,2]
pluck([{a:1, b:3}, {a:2}], 'b') // -> [3, undefined]
If an object is missing the property, you should just leave it as undefined/None in the output array.
*/

//Initial code (works):

function pluck(objs, name) {
    console.log(objs, name)
    let result = []
    //go through the array and find the key with the corresponding name. and add it to the array
    for (let i=0; i <objs.length; i++){
      if (i > 1 && result.length !== i){
        result.push(undefined)
      }
      for (let key in objs[i]){
        if (key === name){
          result.push(objs[i][key])
          break;
        }
      }
    }
    if (result.length !== objs.length){
      result.push(undefined)
    }
    return result
  }

//Best practice:

function pluck(objs, name) {
    return objs.map(function(obj) { return obj[name] });
}

const pluck = (objs, name) => objs.map(obj => obj[name]);