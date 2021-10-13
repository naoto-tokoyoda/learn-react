const filter = (...args) => {
    return args.filter(el => el === 1);
}
console.log(filter(1,2,3));

//this will help you understanding https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters