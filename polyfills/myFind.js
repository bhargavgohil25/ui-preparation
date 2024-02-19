Array.prototype.myFind = function(callback, thisArg) {
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

    for(let i = 0; i < this.length; i++) {
        // callback.call(thisArg, this[i], i, this)
        if(callback(this[i], i, this)) {
            return this[i];
        }
    }
    return -1;
}

const arr = [2, 4, 12, 16];
const item = arr.myFind((item) => {
    return item === 12;
})

console.log(item);