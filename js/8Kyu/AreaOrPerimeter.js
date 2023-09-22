//Instructions:
/*
You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter.

Example(Input1, Input2 --> Output):

6, 10 --> 32
3, 3 --> 9
Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

*/

//Initial code (works):

const areaOrPerimeter = function(l , w) { //length and width always as numbers
    // check if length and width are the same 
    if (l === w) {
      return l * w //does not matter l,l l,w or w,w as they are the same
    } else {
      return l + l + w + w // if not the same, add all sides to get the perimeter
    }
  };
  
  
  //result will be either the perimeter (if both sides are not the same) or the area (if both sides are the same)
  //for example sides of 4,5 will get the answer of 18 

//Best practice: 

const areaOrPerimeter = function(l , w) {
    return l == w ? l*w : 2*(l + w)
  };