Array.prototype.myReduce = function(...args) {
    if(this === null || this === undefined) {
        throw new TypeError('Cannot read property "map" of null or undefined');
    }

    let callback = args[0];

    if(typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    let accumulator = args[1] || this[0];

    for(let i = (args.length > 1 ? 0 : 1); i < this.length; i++) {
        accumulator = callback(accumulator, this[i], this);
    }

    return accumulator;
}

const nums = [1, 2, 3, 4, 5];
const double = nums.myReduce((accum, current) => {
    accum.push(current * 2)
    return accum
}, []);
console.log(double)

const queryString = "cat=meow&duck=quack&dog=woof";
const queryObject = queryString.split("&").myReduce((accum, current) => {
    const splitString = current.split("=")
    accum[splitString[0]] = splitString[1];
    return accum;
}, {})
console.log(queryObject);
