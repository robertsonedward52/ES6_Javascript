//  A closure is the combination of a function and the lexical environment within which that function was declared.
// This environment consists of any local variables that were in-scope at the time the closure was created.

// Lexical scopingSection
// Consider the following:

function createClosure() {
    let name = "Edward";    // name is a local varible created from createClosure function which is an outer function
    function get() {        // get is an inner function, a closure  use
      console.log(`My name is ${name}`);  // variable that is created from the parent function
    }
    get();
}
createClosure();


// ClosureSection
// Now consider the following example:

function myFunction() {
    var age = 22;
    function displayAge() {
        console.log(`I am ${age} of age.`);
    }
    return displayAge;
}
var myFunc = myFunction();
console.log(myFunc());



// Running this code has exactly the same effect as the previous
// example of the createClosure() function above; what's different — and
// interesting — is that the displayAge() inner function is returned
// from the outer function before being executed.

// In this case, myFunc is a reference to the instance of the function displayAge created when myFunction is run. 
// The instance of displayAge maintains a reference to its lexical environment, within which
// the variable name exists. For this reason, when myFunc is invoked, the variable age remains
// available for use and 22 is passed to the console.


// another example is:

function closure(a) {
    return function(b) {
        return a * b;
    };
}
var multiply1 = closure(10);
var multiply2 = closure(30);

console.log(multiply1(2));
console.log(multiply2(3))

// In this third example: the closure() function, which take a single argument a,
// and return a anynonyms function which take also a single argument b;
// and return the sum of a * b ;
//In essence, closure is a function factory — it creates functions which can add a specific value to their argument.
// In the above example we use our function factory to create two new functions — one that multiply1 2 to its argument, and one that mulitply2 3



// Practical closuresSection
// Closures are useful because they let you associate some data (the lexical environment) with a function
// that operates on that data. This has obvious parallels to object-oriented programming, where objects 
// allow us to associate some data (the object's properties) with one or more methods




// Emulating private methods with closuresSection
// Languages such as Java provide the ability to declare methods private, meaning that they can only 
// be called by other methods in the same class.  JavaScript does not provide a native way of doing this,
// but it is possible to emulate private methods using closures. Private methods aren't just useful for 
// restricting access to code: they also provide a powerful way of managing your global namespace,
//  keeping non-essential methods from cluttering up the public interface to your code.


// The following code illustrates how to use closures to define public functions that can access private functions and variables.
// Using closures in this way is known as the module pattern:

var counter = (function() {
    var privateCounter = 0;
   function changeBy(val) {
        privateCounter += val;
    }
   return {
       increment: function() {
           changeBy(2);
       },
       decrement: function() {
           changeBy(-4);
       },
       value: function() {
           return privateCounter;
       }
   }
})();

console.log(counter.value());
console.log(counter.increment()); // undefined 
console.log(counter.increment()); // undefined 
console.log(counter.value());     // return 4
console.log(counter.decrement()); // undefined 
console.log(counter.value());     // return 0

// Here, though, we create a single lexical environment that is shared by three functions: counter.increment, 
// counter.decrement, and counter.value  
// The lexical environment contains two private items: a variable called privateCounter and a function called changeBy.
// Neither of these private items can be accessed directly from outside the anonymous function.
// Instead, they must be accessed by the three public functions that are returned from the anonymous wrapper.
// Those three public functions are closures that share the same environment. Thanks to JavaScript's lexical scoping,
// they each have access to the privateCounter variable and changeBy function.




// You'll notice we're defining an anonymous function that creates a counter, and then we call it 
// immediately and assign the result to the counter variable. We could store this function in a 
// separate variable myCounter and use it to create several counters.

var myCounter = function() {
    myPrivateCounter = 0;
    function modify(item) {
        myPrivateCounter = item;
    }
    return {
        increment: function() {
            modify(1);
        }, 
        decrement: function() {
            modify(-3);
        },
        values: function() {
           return myPrivateCounter;
        }
    }
}
let counter1 = myCounter();
let counter2 = myCounter();

console.dir(counter1.values());
console.log(counter1.increment());
console.log(counter1.increment());
console.log(counter1.values());       /* console 2 */
console.log(counter1.decrement());
console.log(counter1.values());       /* console -3 */
console.log(counter2.values());       /* console -3 */



// Closure Scope ChainSection
// For every closure we have three scopes:-
// Local Scope (Own scope)
// Outer Functions Scope
// Global Scope

var num = 3;
function total(a) {
    return function(b) {
    return function(c) {
        // inner functions scope
        return function(d) {
            // local scope
            return a + b + c / d + num;
        }
    }
    }
}
console.log(total(2) (3) (5) (4));