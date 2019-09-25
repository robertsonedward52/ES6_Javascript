// Callback function 
/*
const posts = [
    {movie: "wounder woman", studio: "universal", orgin: "USA"},
    {movie: "Shaw Hob", studio: "universal image", orgin: "Germany"}
];

function getPost() {
    setTimeout(() => {
   let outPut = "";
   posts.forEach((item, value) => {
       outPut +=`<li> ${item.movie}</li>`;
   });
   console.log(outPut);
    }, 2000);
}

function createPost(post, callback) {
    setTimeout(() => {
   posts.push(post);
    callback();
    }, 3000);
}
createPost({movie: "Sleeping Beauty", studio: "Universal", orgin: "USA"}, getPost);
*/

// Promise Object represents the eventual completion (or failure) of an asynchronous operation.
// Essentially, a promise is a returned object to which you attach callbacks, instead of passing 
// callbacks into a function.

const myArr = [
    {name: "Edward", nationality: "Liberian", country: "Germany"},
    {name: "Maxwell", nationality: "Liberian", country: "Liberia"},
];

function myOb() {
    let txt = "";
 setTimeout(() => {
    myArr.forEach(value => {
        txt += `${value.nationality}`;
    });
    console.log(txt);
 }, 2000);
}

function createPromise(value) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            myArr.push(value);
            // initiatize a varaibale 
            const error = true; // false // if change the false to true you will get Uncaught error: Something went wrong please try again
            if (!error) {
                resolve();
            }
            else {
                reject("Error: Something went wrong please try again");
            }
        }, 2000);
    });
}
// createPromise({name: "Edward", nationality: "Liberian", country: "Germany"}).then(myOb)
// To handle to the Uncaught error:
// .catch(error => { console.log(error)});

// Promise.all//
// const promise1 = Promise.resolve("Hello Promise!");
// const promise2 = "Africa";
// const promise3 = new Promise((resolve, reject) =>
//     setTimeout(resolve, 2000, "Hi, how can I help you")
//  );

//  // working with Ajax calls or xhttp request from the server
// const promise4 = fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response => response.json());

// Promise.all([promise1, promise2, promise3, promise4]).then(value => console.log(value));


// Async / Await 
async function init() {
    await createPromise({name: "Edward", nationality: "Liberian", country: "Germany"});
    myArr();
}
init();