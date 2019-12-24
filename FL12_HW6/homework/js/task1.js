// Your code goes here
var a = window.prompt("Enter a ");

var b = window.prompt("Enter b ");

var c = window.prompt("Enter c ");

if (isNaN(a) || isNaN(b) || isNaN(c) === '0'){
	console.log("Invalid input data");
}
var d = b*b-4*a*c;
alert("Disriminant = " + d);
if (d<0){
	console.log("Disriminant<0");
} else if (d>0) {
	var x1=(b-Math.sqrt(d))/(2*a);
	var x2=(b+Math.sqrt(d))/(2*a);
	console.log("x1 = " + x1);
	console.log("x2 = " + x2);
} else if (d===0) {
	var x = -b/2*a;
	console.log("x = " + x);
}