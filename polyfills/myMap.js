
Array.prototype.myMap = function(callback, thisArg) {
    if(this === null || this === undefined) {
        throw new TypeError('Cannot read property "map" of null or undefined');
    }

    if(typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    // if we pass no context to the map(). make `this` as default for `thisArg`
    if(thisArg === undefined) {
        thisArg = this;
    }

    let res = [];
    // `thisArg` is basically the context in which we want to run the callback in

    // here `this` keyword points to the array on which we are
    // applying `myMap`
    for(let i = 0; i < this.length; i++) {
        res[i] = callback.call(thisArg, this[i], i, this);
    }
    return res;
}

const numbers = [1, 2, 3, 4, 5];

function doubleNumber(value) {
    return value * 2 + this.offset;
}

const context = { offset: 10 };

const doubledNumbers = numbers.myMap(doubleNumber, context);

console.log(doubledNumbers); // Output: [12, 14, 16, 18, 20]
