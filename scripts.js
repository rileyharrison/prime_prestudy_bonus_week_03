function functionA(a){
	var x = a;
	x = x * 2;
	return x;
}

function functionB(b){
	var y = b;
	y = y * 10;
	return y;
}

function functionC(c){
	var z = c;
	z = z * 100;
	return z;
}

console.log(" functionA multiplies argument by 2.");
console.log(" functionB multiplies argument by 10.");
console.log(" functionC multiplies argument by 100.");
console.log(" nested functions are invoked on page load, with 3 passed to functionC, the result passed to functionB, and that passed to functionA.")
console.log(" for jollys the button click also calls this nested function and changes the button text to the result.")

console.log(functionA(functionB(functionC(3))));

function clickMe(){

	

	var x = functionA(functionB(functionC(3)));

	document.getElementById("myClick").value = x;
}
