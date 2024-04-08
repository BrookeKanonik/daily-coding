//Instructions:

/*
Replace all A"s in a string with "the."
*/

//Initial code (works):

const replaceAs = word => word.replaceAll('A', 'the')

//If it is A and a

const regex = /A/gi
const replaceAs = word => word.replaceAll(regex, 'the')

//Solving without replaceAll:

//create array, loop through, replace word, join