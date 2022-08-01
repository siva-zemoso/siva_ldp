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


const  requestData =  (uId) => {
  return new Promise((resolve, reject) => {
    console.log('Fetching  the data!')
    setTimeout(() => resolve("skc@gmail.com"), 4000)
});

  }


  console.log("start");
  const getData =   async() => {
    try{
      const email =  await requestData("skc");
      console.log("Email id of the user id is: " + email);
    }
    catch (err){
        console.log(err);

    } 

  }
   
  getData();
  
  console.log("siva");
  console.log("end");

/*
const promise = new Promise((resolve, reject) => {
  // "Producing Code" (May take some time)
  
  resolve("SUCCESS"); // when successful
  reject("ERROR");  // when error
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
    */