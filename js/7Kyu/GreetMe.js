//Instructions:

/*
Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"
*/

//Initial code (works):

var greet = function(name) {
    name = name[0].toUpperCase() + name.slice(1).toLowerCase() //makes the first capitalized and the rest lowercase
    return `Hello ${name}!`
  };

//Best practices:

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}

var greet = function(name) {
return "Hello " + name.capitalize() + "!";
};

var greet = function(name) {
    return "Hello " + name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() + "!";
  };