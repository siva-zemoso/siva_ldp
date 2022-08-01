var f1 = () => {
   return 100;  
}
var  f2 = (f1)  => {
    let a=10;
    let b=20;
    let c= a+b;
    console.log(c);
    let sum=f1()+50;
    console.log(sum);
}

var  f2 = ()  => {
    console.log("f2 without param");
}
f2(f1);
const getFirstLetter = (firstName,lastName) => firstName[0]+lastName[0];
console.log(getFirstLetter('Roger','Waters'));