function sayHi(window){
	return window;
}

function greet( aGreeting ){

	return aGreeting;
}

 let greeting = sayHello();
 console.log( greeting )
 
 greeting = sayHi();
 console.log( greeting )


greeting = greet("assalamu alaikum");
 console.log( greeting )
 
greeting = greet("good morning");
 console.log( greeting )


// function definition
function  add(){
	
  let number1 = 10;
  let result = 0;
  result = result + number1;

	return result;
}

//function call
// add(5)


console.log( add() );
/* console.log( add(5) );
console.log( add(7) );
console.log( add(50) ); */


// standard function definition

function sayHello1(){
	return "Hello1";
}

// anonymous

let sayHello2 = function(){
	return "Hello2";
}


// arrow function
let sayHello3 = () => {
	return "Hello3";
}

let sayHello4 = () => { return "Hello3";}
	
let greet = ( aGreeting ) => aGreeting


console.log( greet("assalamu alaikum") );