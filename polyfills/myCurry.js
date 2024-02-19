function myCurry(func) {
    return curriedFunction = function(...args1) {
        if(args1.length >= func.length) {
            return func.apply(this, args1);
        }
        return function(...args2) {
            return curriedFunction.apply(this, [...args1, ...args2]);
        }
    }
}

function multiply(a,b,c,d) {
    return a * b * c * d;
}

const curriedFunc = myCurry(multiply);

console.log(curriedFunc(2)(3,5)(2));