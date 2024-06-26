//Instructions:

/*
You're going to implement a simple counter class. The counter will start at zero, and every time its incr method is called, it will increase by 1.

There's one caveat: Your counter must act like a number and support arithmetic operations and comparisons.

For example:

var c = new Counter();
c.incr(); // counter is now at 1
c + 1; // 2
c > 1; // false
c > 0; // true
c == 1; // true
Math.sqrt(c); // 1
You are not required to support equality comparison between two Counter instances.
*/

//Corky thoughts:

function Counter(){
    this.value = 0
}
  
Counter.prototype.incr = function() {
    this.value++;
}  
  
Counter.prototype.valueOf = function() {
    return this.value;
}

//Made into a class:

class Counter {
    constructor() {
      this.counter = 0;
    }
    
    incr() {
      this.counter++;
    }
    
    valueOf() {
      return this.counter;
    }
  }