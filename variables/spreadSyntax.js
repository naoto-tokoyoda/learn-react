
//spread in arrays
const numbers = [1,2,3];
const newNumbers = [...numbers, 4];
console.log(newNumbers);


//spread in objects
const person = {
    name: "naoto"
};

const newPerson = {
    ...person,
    age: 150
}
console.log(newPerson)