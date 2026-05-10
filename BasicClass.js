/*  Let's create a class and how we can call them by icluding constructors*/

module.exports = class PersonDetails {
  age = 26;
  gender = "male";

  //constructor
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  get fullName() {
    return "Full Name: " + this.firstname + this.lastname;
  }

  fullNameOfPerson() {
    console.log("This is called from function");
    console.log("Full Name: " + this.firstname + this.lastname);
  }
};

// // create a object fro the class
// let person = new PersonDetails("Rohith", "Raka");

// console.log("Age: " + person.age);
// console.log(person.fullName);

// person.fullNameOfPerson();
