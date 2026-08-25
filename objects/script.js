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

//Modifying Object Property
//Dot Notation
person.firstName = "Abhi";
console.log(person.firstName);
//Bracket Notation
person["firstName"] = "Abhi";
console.log(person["firstName"]);

//Adding Object Property
//Dot Notation
person.gender = "Male";
console.log(person);
//Brackt Notation
person["gender"] = "Male";
console.log(person);

//Property Value

//Function of value
let person = {
  firstName: "Rahul",
  lastName: "Attuluri",
  age: 20,
  run: function () {
    console.log("Start Running.");
  },
};
person.run();

//Array as Value
let person = {
  firstName: "Rahul",
  lastName: "Attuluri",
  age: 28,
  habits: ["Playing Chess", "Singing"],
};
console.log(person.habits);
console.log(person.habits[0]);
console.log(person["habits"][1]);

//Object as a Value
let person = {
  firstName: "Rahul",
  lastName: "Attuluri",
  age: 28,
  habits: ["Playing Chess", "Singing", "Dancing"],
  car: {
    name: "Audi",
    model: "A6",
    color: "White",
  },
};
console.log(person.car.name);
console.log(person.car["model"]);
