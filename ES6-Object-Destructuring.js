// similar to array destructuring, Object destructuring unpacks properties into distinct variables.
// for examples:

let obj = {h: 300, s: false};
let {h, s} = obj;

console.log(h); // 300
console.log(s); // false 


// we can assign without declaration, but there are some sytax requirements for that:

let a, b;
({a, b} = {a: "Echo!", b: " JavaScript"});
console.log(a + b); // Echo! JavaScript


// The () with a semicolon (;) at the end are mandatory when destructuring without a declaration.
// However, you can also do it as follows where the () are not required:

let {c, d} = {c: "Hello!", d: " World"};

console.log(c + d);