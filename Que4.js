// Q4. Write a JavaScript function called calculateTax that takes an income as an argument and returns the
// amount of tax to be paid. Use a closure to handle different tax rates based on income ranges. Test the
// function with various incomes.

function calculateTax(income){
   
    function calc()
    {
        if(income>300000 && income<=600000)
        {
            return (income * 5)/100
        }

        else if(income>600000 && income<=900000)
        {
            return (income * 10)/100
        }

        else if(income>900000 && income<=1200000)
        {
            return (income * 15)/100
        }

        else if(income>1200000 && income<=1500000)
        {
            return (income * 20)/100
        }

        else{
            return (income * 30)/100
        }
    }
    
    return calc;
}

const result = calculateTax(900001)
console.log(result());