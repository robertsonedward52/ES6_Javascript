/* Template Literals in ES6  are a way to ouput Variable in the string*/
/* ES6 introduces a new way of ouputing variable values in strings. */

let name = "Maxwell";
let outPut = `Thanks ${name}!`;
console.log(outPut);

/* Notice, that template literals are enclosed by the backtick (``) character instead of double
or singles quotes. The ${expression} is a placeholder, and can include any expression,which
will get evaluted and inserted into the template literal. */

/* To escape a backtick in a template literal, put a backslash \ before the backtick. */