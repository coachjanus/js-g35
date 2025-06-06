"use strict";

// let hello = "Hello World!"; 
// const hello = "Hello World!"; 
var hello = "Hello World!"; 
hello = "Hello World and me!";

window.foo = "Hello bar!";

{
    // block
    /**
     * 
     */
    let hello = "Hello Blocks World!";
}
// alert(hello);
// window.alert(foo);

function mult(n, m) {
    let result = n * m;
    return result;
}

// let x = prompt("Enter x = ");
// let result = mult(x, 2);
let result = 7 / 0;
// console.log(result);

let o = prompt("Enter operation = ");
let x = parseFloat(prompt("Enter x = "));
let y = parseFloat(prompt("Enter y = "));

if (isNaN(x) || isNaN(y)) {
    console.error("x or y not a number")
} else {
    if (o == '+') {
        result = x + y;
    } else if (o == '-') {
        result = x - y;
    }else if(o == '*') {
        result = x * y;
    }else if (o == '/') {
        result = x / y;
    } else {
        console.error("operation undifined")
    }
    console.log("Result = ", result);
}



