/*

    Normal JavaScript function is like this

*/
function userName1(name){
    console.log(name);
}
//call function
userName1("Naoto1");


/*

    Arrow function syntax is like this

*/
const userName2 = (name) => {
    console.log(name);
}
//call function
userName2("naoto2");

// this also works but it should be only one argument
const userName3 = name => {
    console.log(name);
}
//call function
userName3("naoto3");


/*

    when there are two arguments inside, do this

*/
const userName4 = (name, age) => {
    console.log(name, age);
}
//call function
userName4("Konnichiwa", 150);

/*

    How to use return in the arrow function

*/
const multiply1 = (number) => {
    return number * 10;
}
//call function
multiply1(5);

/*

    How to use return in the arrow function with shorthand

*/
const multiply2 = number => number * 10;
//call function
multiply2(5);