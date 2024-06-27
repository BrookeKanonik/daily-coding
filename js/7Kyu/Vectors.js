//Instructions:

/*
Create a Vector class with x and a y attributes that represent component magnitudes in the x and y directions.

Your vectors should handle vector additon with an .add() method that takes a second vector as an argument and returns a new vector equal to the sum of the vector you call .add() on and the vector you pass in.

For example:

>>> a = Vector(3, 4)
>>> a.x
3
>>> a.y
4
>>> b = Vector(1, 2)
>>> c = a.add(b)
>>> c.x
4
>>> c.y
6
Adding vectors when you have their components is easy: just add the two x components together and the two y components together to get the x and y components for the vector sum.
*/

//Initial thoughts:

class Vector {
    constructor(x,y){
        this.x =x;
        this.y =y;

    }
    add(a,b){
        this.x += a
        this.y +=b
    }
}

//Corky code:

class Vector {
    constructor(x,y){
        this.x =x;
        this.y =y;

    }
    add(otherVect){
      return new Vector(this.x + otherVect.x, this.y + otherVect.y)
    }
}

class Vector {
    constructor(x,y){
        this.x =x;
        this.y =y;

    }
    add(otherVect){
      const newX = this.x + otherVect.x,
            newY = this.y + otherVect.y;
      
      return new Vector(newX,newY)
    }
}