let n = prompt('Enter a Number : ');
let array = [];

for (let i = 1; i <=n; i++) {
    array[i-1] = i;
    
}

console.log(array);

let sum = array.reduce((result, current) => {
    return result + current;
})

console.log('Sum = ', sum);


let factorial = array.reduce((result, current) => {
    return result * current;
})

console.log('Factorial = ', factorial);