//Creating an Object

let person = {
  firstName: "Kranthi",
  lastName: "Kumar",
  age: 18,
};
console.log(person);

//Accessing Object Properties
//Dot Notation
console.log(person.firstName);
//Bracket Notation
console.log(person["firstName"]);

let a = "lastName";
console.log(person.a); //undefine
console.log(person[a]); //Kumar

//Object Destructuring

let { firstName, age } = person;
console.log(firstName);
console.log(age);
