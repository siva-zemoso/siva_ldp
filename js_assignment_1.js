var f1 = () => {
    //console.log("in function 1");
   // alert("in function 1");
   return 100;
    
}

var  f2 = (f1)  => {
    let a=10;
    let b=20;
    let c= a+b;
    console.log(c);
    let sum=f1()+50;
    console.log(sum);
    //alert(y);
    
}

var  f2 = ()  => {
    console.log("f2 without param");

}

f2(f1);