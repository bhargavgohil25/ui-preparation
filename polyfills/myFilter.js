Array.prototype.myFilter = function (callback, thisArg) {
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

    const res = [];

    for(let i = 0; i < this.length; i++) {
        // const value = callback.call(thisArg, this[i], i, this);
        const value = callback(this[i], i, this);
        if(value) {
            res.push(this[i]);
        }
    }

    return res;
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8];

const even = nums.myFilter((num, i, arr) => {
    return num % 2 === 0;
})

console.log(even);
