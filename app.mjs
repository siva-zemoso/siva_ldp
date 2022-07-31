import request from "axios";

let num;// file level 


let str ="10";
var c = a+b;
//closure,
//var - global variable , hoisting,basics of js, css with flexbox, media query for 
//promise,async,await, closure
//.mjs - ES6 support
//.cjs - common js
var a =Number(15);
var b =Number(20);

console.log("Hello World!"+num);
console.log(str==num);
console.log(typeof c);


const promise = new Promise(function(resolve, resolve) {
  // "Producing Code" (May take some time)
  
  resolve("SUCCESS"); // when successful
  resolve("ERROR");  // when error
  });

  promise.then(console.log("SUCCESS"))
  .catch(console.log("ERROR"));

const options = {
  method: 'GET',
  url: 'https://jsonplaceholder.typicode.com/todos/',
  
};

request(options).

then((response) => console.log(response.data)).
catch( (error) => console.error(error));
            