/*

    var as variable:
    - it is global scope
    - can be used function scope inside
    - it is not block scope
    - can be reassigned

    Scope means "{}"
    To sum up, it is not recommended to use this variables.
    Otherwise you will have a problem on your code in the future.

*/

var myName = "naoto";
console.log(myName);

myName = "henlo";
console.log(myName); //it is chaneged

/*

    let as variable:
    - it is not global scope
    - can be used function scope inside
    - it is block scope which means cannot be used outside of the scope where you declared the variable at first
    - can be reassigned

*/

let myName = "naoto";
console.log(myName);

myName = "henlo";
console.log(myName); //it is chaneged

/*

    const as variable:
    - it is not global scope
    - can be used function scope 
    - it is block scope which means cannot be used outside of the scope where you declared the variable at first
    - cannot be reassigned

*/

const myName = "naoto";
console.log(myName);

myName = "henlo";
console.log(myName); //it generates error


