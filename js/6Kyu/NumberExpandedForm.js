//Instructions:

/*Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.

If you liked this kata, check out part 2!!
*/

//Initial code (works):

function expandedForm(num) {
    let result = '' //track result
    num = num.toString() //made it a string to make our live easier
    let currZeros = num.length - 1
    for (let i=0; i <num.length; i++){
      if (num[i] != '0'){
        result = result + num[i] + '0'.repeat(currZeros) + ' + '
      }
      currZeros --;
    }
    
    return result.slice(0, -3)
}

//reword with ``'s and make it neater

function expandedForm(num) {
    let result = '' //track result
    num = num.toString() //made it a string to make our live easier
    let currZeros = num.length - 1
    for (let i=0; i <num.length; i++){
      if (num[i] != '0'){
        result += `${num[i]}${'0'.repeat(currZeros)} + `
      }
      currZeros --;
    }
    
    return result.slice(0, -3)
  }

//Best practice:

const expandedForm = n => n.toString()
                            .split("")
                            .reverse()
                            .map( (a, i) => a * Math.pow(10, i))
                            .filter(a => a > 0)
                            .reverse()
                            .join(" + ");