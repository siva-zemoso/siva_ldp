/*const printName = (name) => {
    return "Hi" + name;
}*/

/*
const printBill = (name, bill) => {
    return "Hi“ + name + “, please pay: " + bill;
}*/

const printName = (name) => "Hi" + name;

const printBill = (name, bill) => "Hi“ + name + “, please pay: " + bill;



console.log(printName("SIVA"));
console.log(printBill("SIVA",155.20));


const person = {
    name: "Noam Chomsky",
    age: 92
}

//let name = person.name;
//let age = person.age;
const{name,age} = person;
console.log(name);
console.log(age);