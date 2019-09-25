// In Javascript we commonly use the for loop to iterate over values in a list:
let arr = [2, 55, 40, 67];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// The for...in loops is intended for iterating over the enumerable keys of an object.
// for example: 
let obj = {name:"Edward", age:22, nationality: "Liberian"};
for (let e in obj) {
    console.log(e);
}

// for...in loop should NOt be used to iterate over arrays because, depending on the Javascript 
// engine, it could iterate in an arbitary order. 


// ES6 also introduce the new for...of loop, which creates a loop iterating over iterables objects
// for example: 

let car = ["BMW", "PORSCHE", "TOYOTA"];
for (let val of car) { // During each iteration the val variable is assigned the corresponding element in the list
    console.log(val);
}


// The for...of loop also works on the newly introduced collections (Map, Set, WeakMap and WeakSet).