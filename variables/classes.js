/*

    classes are essentially blueprints for objects

    class Person {
        name = "naoto"; // property
        myMethod = () => {...} // method
    }

    const myPerson = new Person()
    myPerson.myMethod()
    console.log(myPerson.name)

    //if it inheritances
    class Person extends Master

*/

class Human{
    constructor() {
        this.gender = "male";
    }

    printGender(){
        console.log(this.gender);
    }

}

class Person extends Human{
    //this is the constructor that is a default function method
    constructor(){
        super();
        this.name = "Naoto";
    }

    printName(){
        console.log(this.name)
    }
}

const person = new Person();
person.printName();
person.printGender();