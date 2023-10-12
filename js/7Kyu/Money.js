//Instructions:

/*
Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.

The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.

Note to Tax: not the invested principal is taxed, but only the year's accrued interest

Example:

  Let P be the Principal = 1000.00      
  Let I be the Interest Rate = 0.05      
  Let T be the Tax Rate = 0.18      
  Let D be the Desired Sum = 1100.00


After 1st Year -->
  P = 1041.00
After 2nd Year -->
  P = 1083.86
After 3rd Year -->
  P = 1128.30
Thus Mr. Scrooge has to wait for 3 years for the initial principal to amount to the desired sum.

Your task is to complete the method provided and return the number of years 'Y' as a whole in order for Mr. Scrooge to get the desired sum.

Assumption: Assume that Desired Principal 'D' is always greater than the initial principal. However it is best to take into consideration that if Desired Principal 'D' is equal to Principal 'P' this should return 0 Years.
*/

//Initial code (works for some not all because interest should just be taxed):

function calculateYears(principal, interest, tax, desired) { //we are intaking all numbers for the parameters
    let year = 0 //initiate year 
    if (principal === desired){
      return year
    } else {
      while (principal < desired){ 
        principal = Math.floor(principal * (1+interest) * (1 - tax/100)) //flooring as we want to round down (believed based on examples)
        year ++
      }
      return year
    }  
}
//we are returning the years it will take in order to reach the desired amount note that 0 years is a possible answer
//example 1000,0.05,0.18,1100 ---> 3 years

//Best practice:

function calculateYears(principal, interest, tax, desired) {
    // your code
    var years = 0;
    while(principal < desired){
      principal += (principal * interest) * (1 - tax);
      years++;
    }
    return years;
}