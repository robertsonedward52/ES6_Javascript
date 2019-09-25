// ES6 Rest Parameters 

// if we wanted to pass a variblae number of argument to a function, we could use the arguments
// object, and array like object, to access the parametes passed to the function,
// for example, let write a function that checks if an array contains all the arguments passed.

function showAll(arr) {
    for (let i = 1; i < arguments.length; i++) {
      let val = arguments[i];
      if (arr.indexOf(val) === -1) {
          return false;
      }
    }
    return true;
}
let x = [2, 4, 5, 10, 3]; // return false
console.log(showAll(x, 3, 5, 6));


// We can pass any number of arguments to the function and access it using the arguments object.
// while this does the job, ES6 provides a morde reable syntax to archieve variable number of parameters 
// by using a rest parameter:

function checkRest(myArr,...nums) {
    for (let num of nums) {
        if(myArr.indexOf(num) === 1) {
            return true;
        }
    }
    return false;
}
let p = [4, 1, 7, 8, 10];  // return true
console.log(checkRest(p, 1, 3, 4, 8));

// The ...nums parameter is called a rest parameter. It takes all the "extra" arguments passed to the
// function. The three dots(...) are called the spread operator.

// Only the last parameter of a function may be a marked as a rest parameter. If there are no extra 
// arguments, the rest parameter will simply be an empty array. The rest parameter will never 
// be undefined.