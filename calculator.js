/**
 *  Name : Brent M Quipanes 
 *  Created Date : 2026-03-10
 *  Subject : IT Programming 1
 *  Section and Course : BSIT 1M
 * 
 */



//Functions for basic arithmetic operations
//This is the function that will perform the calculation based on the operator and the two numbers.
function add      (a, b)        {return a + b;}
function subtract (a, b)        {return a - b;}
function multiply (a, b)        {return a * b;}
function divide   (a, b)        {return a / b;}
function modulus  (a, b)        {return a % b;}
function power    (a, b)        {return a ** b;}

//Function to compute the total price including VAT, rounded to two decimal places
//Division by zero check
function divideByZero (a, b) {
    if (b === 0) {
        return " Error : Division by zero is not allowed.";
    }
    return a / b;
}


// Function to compute the subtotal of the item price and quantity
let price = 100; // Price of the item
let quantity = 5; // Quantity of the item
const vatRate = 0.12; // VAT rate of 12%


let subtotal = price * quantity;                 // Subtotal of the item price and quantity
let total    = subtotal + subtotal * vatRate;    // Total price including VAT
let clearer  = subtotal * (1 + vatRate);         // Total price including VAT using a clearer formula
let attempts = 0;
attempts += 1;   // 1
attempts++;      // 2




// Test the calculator functions
console.log(add(60, 7));                      // Output: 67
console.log(subtract(80, 13));                // Output: 67
console.log(multiply(8, 7));                  // Output: 56
console.log(divide(56, 8));                   // Output: 7
console.log(modulus(82, 4));                  // Output: 2
console.log(power(2, 6));                     // Output: 64
console.log(divideByZero(70, 0));             // Output: "Error: Division by zero is not allowed."
console.log(0.1 + 0.2);                       // 0.30000000000000004
console.log((0.1 + 0.2).toFixed(2));          // '0.30'  (a string)
console.log(Number((0.1 + 0.2).toFixed(2)));  // 0.3   (a number)
console.log('Attempts:', attempts);
