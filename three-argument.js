// let num1;
// let num2; 
// let operator; 

// function calc(num1, num2, operator) {
//     if (operator == '+') {
//         console.log(num1+num2);
//     } else if (operator == '-') {
//         console.log(num1-num2);
//     } else if (operator == '*') {
//         console.log(num1*num2);
//     } else if (operator == '/') {
//         console.log(num1/num2);
//     } else {
//         console.log('No Operator Selected');
//     }
// }

// calc(20, 10, '+');
// calc(20, 10, '-');
// calc(20, 10, '*');
// calc(20, 10, '/');


let numOne = prompt("Enter a number: ");
let numTwo = prompt("Enter a number: "); 
let operator; 

function calc(numOne, numTwo, operator) {
    if (operator == '+') {
        console.log(numOne+numTwo);
    } else if (operator == '-') {
        console.log(numOne-numTwo);
    } else if (operator == '*') {
        console.log(numOne*numTwo);
    } else if (operator == '/') {
        console.log(numOne/numTwo);
    } else {
        console.log('No Operator Selected');
    }
}

calc(numOne, numTwo, '+');
calc(numOne, numTwo, '-');
calc(numOne, numTwo, '*');
calc(numOne, numTwo, '/');





