//Instructions:

/*
Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
*/

//Initial code (works but can probably move draw up a level):

const rps = (p1, p2) => {
    if ((p1 === 'paper' && p2 === 'rock') || (p1 === 'rock' && p2 === 'scissors') || (p1 === 'scissors' && p2 === 'paper')){
      return 'Player 1 won!'
    } else if (p1 === p2){
      return 'Draw!'
    } else {
      return 'Player 2 won!'
    }
  };

//Best practice:

const rps = (p1, p2) => {
    if (p1 === p2) return "Draw!";
    var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
    if (p2 === rules[p1]) {
      return "Player 1 won!";
    }
    else {
      return "Player 2 won!";
    }
  };