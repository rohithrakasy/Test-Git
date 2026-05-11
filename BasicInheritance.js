/* Write code for Inheritance */

const PersonDetails = require("./BasicClass");

class Pet extends PersonDetails{

    constructor(firstName,lastName){
        super(firstName,lastName);        
    }

    get location(){
        return "PetsMart";
    }
}

let pet = new Pet("Sam","Doggy");
console.log(pet.fullName);
console.log(pet.location);
console.log(pet.fullNameOfPerson());