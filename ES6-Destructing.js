/* The destructing assignment syntax is a JavaScript expression that makes it possible
to unpack values from arrays, or properties from objects, into distinct variables.
ES6 has added a shorthand syntax for destructuring an array.
*/

// The following example demonstrates how to unpack the elem of an array into distinct variables.

let arr = ["Months", "Year", "Weeks"];
let [Months, Year, Weeks, Days] = arr;

console.log(Months); // Months
console.log(Year);  // Years
console.log(Weeks);  // Weeks

// We use also destructure an array returned by a function.
// for example:
let a = () => {
    return [1, 2, 4];
}
let [one, , two] = a ();
console.log(a());   // 1, 2, 4    Notice that we left the second argument's place empty.

// The destructing synatx also simplifies assignment and swapping values:

let a, b, c = 4, d = 6;
[a, b = 2] = [1]; // a = 1 , b = 6

[c, d] = [d, c]; // c = 6, d = 4;


