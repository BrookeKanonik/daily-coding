//Instructions:

/*
A child is playing with a ball on the nth floor of a tall building. The height of this floor above ground level, h, is known.

He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

His mother looks out of a window 1.5 meters from the ground.

How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?

Three conditions must be met for a valid experiment:
Float parameter "h" in meters must be greater than 0
Float parameter "bounce" must be greater than 0 and less than 1
Float parameter "window" must be less than h.
If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

Note:
The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

Examples:
- h = 3, bounce = 0.66, window = 1.5, result is 3

- h = 3, bounce = 1, window = 1.5, result is -1 

(Condition 2) not fulfilled).
*/

//Initial code (works) and best practice:

function bouncingBall(h,  bounce,  window) { //parameters = h = height of the floor above ground level 
    let count = -1 //as it is a while loop, we want to start out with 1 for the initial drop, so -1 + 2 in the loop will equal 1. this is due to the initial drop, and after there is a pattern of if the ball is viewed at the window/when it will bounce down.
    let speed = h //bounce = the height of the bounce, window = height of the window 
    if (h > 0 && bounce < 1 && bounce > 0){
      while (speed > window){
        speed *= bounce 
        count += 2
        
      } return count 
    } else {
      return -1 
    }
  } 

  //Other variation:

  function bouncingBall(h,  bounce,  window) {
    var rebounds = -1;
    if (bounce > 0 && bounce < 1) while (h > window) rebounds+=2, h *= bounce;
    return rebounds;
  }