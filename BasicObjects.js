//Object is nothing but collection of properties

let person = {
  firstName: "Rohith",
  lastName: "R",
  fullName: function () {
    console.log(this.firstName + this.lastName);
  },
};

console.log(person);

console.log(person.firstName);

// Add new property in person

person.gender = "Male";

console.log(person);

//delete a property in object

// delete person.gender;

// console.log(person);

/* Traverse in object by using advance for loop similar to for each loop in java*/

for (let key in person) {
  console.log(person[key]);
}

// Vlaidate if a key is present in object or not
console.log("gender" in person);

/* Lets add a new function in object*/
//Call full name function in object
console.log(person.fullName());