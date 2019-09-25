/* In ES6 we have three ways of declaring a variables: */
var a = 10; 
const b = "hello";
let c = true;

/* The type declaration used depends on the necessary scope. 
    var keyword, which defines a variable globally, or 
    locally to an entire function regardless of block scope. 
*/

/* let allows you to declare varaibles that are limited in scope to the block, statmemt,
    or expression in which they are used 
    */

    /* for example: */
/*
    if (true) {
        let name = "Robertson";
    }
    console.log(name); // generates an error   */

/* In this case the variable is only accessible in the scope of the if statment because it was 
    declared with a let keyword */


    /* to demonstrate the difference in scope between var and let keyword, consider this example: */

    function varTest() {
        var x = 4;
        if (true) {
            var x = 6; // same variable 
            console.log(x); // 6
        }
        console.log(x) // 6
    }

    function letTest() {
        let y = 4;
        if(true) {
            let y = 15;     // different variable
            console.log(y);  15
        }
        console.log(y); // 4
    }
    

    // one of the best uses of let is in loops: 

    for (let i = 0; i < 5; i++) {
        console.log(i);
    }

    // Let is not subject to Variable Hoisting, which means that let declarations do not 
    // move to the top of the current execution context 

    // const variables have the same scope as variables declared using let. The difference is that
    // const variables are immutable - they are not allowed ot be reassigned.

    const n = "Hello World";
    n = "Echo!";
    console.log(a);  // this will through an exception

    // Const is not subject to Variable Hoisting too, which means that const declaration 
    // do not move to the top of the current execution context 








