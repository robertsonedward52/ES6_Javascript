// ES adds a new Object method assign() allows us to combine multiple source into one target to create 7
// single new object.
// Object.assign() is also useful for creating a duplicate of an existing Object.

// let's look at the following example to see how to combine objects.

let student = {
    name: "Edward",
    age: 22, 
    gender: "male"
};
let teacher = {
    name: "Maxwell",
    age: 10,
    gender: "male"
};
let newStudent = Object.assign({}, student, teacher);
console.log(newStudent);

// Herw we used Object.assign() where the first parameter is the target object you want to apply new properties to.
// In the example above, we used a new Object {} as the target and used two objects as sources.

/* Now,  let's see how we can use assign() to create a duplicate object without creating a reference 
(mutating) to the base object.
*/

let parent = {
    firstName: "Lectricia",
    lastName: "Robertson",
    age: 42,
    gender: "Female"
};
let newParent = parent; // newParent references parent
newParent.firstName = "Marie";

console.log(parent.firstName);  // Marie
console.log(newParent.firstName); // Marie


// To allow this (mutations), use Object.assign() to create a new object.
// for example:

let church = {
    ch_name: "Bethel World",
    ch_address: "Maryland Co.",
    ch_founder: "Pastor Reed"
};
let newChurch = Object.assign({}, church);
newChurch.ch_name = "Outreach Ministry";

console.log(church.ch_name);  // Bethel World
console.log(newChurch.ch_name);   // Outreach Ministry

// Finally, you can assign a value to an object property in the Object.assign() statement.
// for example:

let city = {
    name: "Hamburg",
    postalCode: 21629,
    region: "Niedersachen"
};
let newCity = Object.assign({}, city,{name: "Berlin"});

console.log(newCity.name)

