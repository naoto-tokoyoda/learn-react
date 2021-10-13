/*

    how classes with ES6 work

*/

class Human{
    gender = "male";

    printGender = () => {
        console.log(this.gender);
    }

}

class Person extends Human{
    //this is the constructor that is a default function method
    name = "Naoto";

    printName = () => {
        console.log(this.name)
    }
}

const person = new Person();
person.printName();
person.printGender();