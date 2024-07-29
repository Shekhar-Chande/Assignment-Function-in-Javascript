// Q5. Write a JavaScript function called factorial that calculates the factorial of a non-negative integer using
// recursion. Test the function with different inputs.


function factorial(n) { 
    if (n === 0 || n === 1) { 
        return 1; 
    } else { 
        return n * factorial(n - 1); 
    } 
} 
let num = 5; 
let result = factorial(num); 
console.log("The factorial of given number is :" + result);