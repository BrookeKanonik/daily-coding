//Instructions:

/*
The Story:
Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.

Task Overview:
You have to write a function that accepts three parameters:

cap is the amount of people the bus can hold excluding the driver.
on is the number of people on the bus excluding the driver.
wait is the number of people waiting to get on to the bus excluding the driver.
If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

Usage Examples:
cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting
*/

//Initial code (works):

function enough(cap, on, wait) { //parameters are cap, on, wait which are all numbers
    return on + wait > cap ? Math.abs(cap - on - wait) : 0 //we will need to take the abs from subtracting on and wait from the cap 
  }
  
  //return either the amount of passengers they cannot take, or 0 if the bus can take the passengers waiting
  //example would be 100, 50, 60 and we would return 10 since 10 passengers would be left out 

// Best practice:

function enough(cap, on, wait) {
    return Math.max(wait + on - cap, 0);
  }