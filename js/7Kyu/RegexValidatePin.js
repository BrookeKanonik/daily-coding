//Instructions:
/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
*/

//Initial code (works):

function validatePIN (pin) {
    let count = 0
    for (let i = 0; i < pin.length; i++){
      if (pin[i].search(/[0-9]/) !== -1){
        count ++
      }
    }
    if ((count === 4 && pin.length === 4) || (pin.length === 6 && count === 6)){
      return true
    } else {
      return false
    }
    
  }

//Best practice:

function validatePIN(pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
}

//Example:

// /^abc$/ 
// dabcd would not match since abc needs to be at the beginning and it will need to end with c
// digit = \d and {} is how many you want to see 
// ^ means the beginning of the string that you are parsing 
// $ means look at the end

//Other solves to study:

function validatePIN (pin) {
  
    var pinlen = pin.length;
    var isCorrectLength = (pinlen == 4 || pinlen == 6);
    var hasOnlyNumbers = pin.match(/^\d+$/); // + means at least one 
      
    if(isCorrectLength && hasOnlyNumbers){
      return true;
    }
    
    return false;
  
}