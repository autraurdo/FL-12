// Your code goes here
var a = window.prompt('Enter side a:', '');
var b = window.prompt('Enter side b:', '');
var c = window.prompt('Enter side c:', '');
if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log('Input values should be ONLY numbers');
} else if (a <= 0 || b <= 0 || c <= 0) {
        console.log('A triangle must have 3 sides with a positive definite length');
    } else { 
        if ( a + b <= c || b + c <= a || a + c <= b ) {
        console.log('Triangle doesn’t exist');
        } else {
            if(a === b || a === c || b === c){
                console.log('Isosceles triangle');
            }else if(a === b && b === c){
                console.log('Equilateral triangle');
            }else{
              console.log('Scalene triangle');
            }
          }
}