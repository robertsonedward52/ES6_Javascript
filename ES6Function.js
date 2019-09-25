// ES6 introduce a new syntax for writing functions. 
const add = (x, y) => {
    var total = x * y;
    console.log(total);
}

// ES6 introduce a new syntax is quite handy when you just need a simple 
// function with one argument . You can skip typing function and return, as
// well as some parentheses and braces

// for example:
const salutaion = x => "Hi, my name is Edward" + x; 

// The code above defines a function named salutation that has one argument and returns a message

// if there are no parameters, an empty pair of parentheses should be used, as in 

const y = () => alert("HELLO WORLD");


// the syntax is very useful for inline functions. let's say we have an array, and 
// each array element of the array we need to excute a function.
// We use the forEach() method of the array to call a function for each element 

var arr = [2, 4, 55, 6];

arr.forEach(function(pl) {
    console.log(pl * 2);
})


// However , in ES6, the code above can be written as following:

const myarr = [45, 100, 50, 70];

myarr.forEach(item => {
    console.log(item * 4);
})


// Defualt Parameters in ES6

const val = (a, b = 10, c = 50) => {
    return a + b + c;
}
console.log(val(20));   // 80