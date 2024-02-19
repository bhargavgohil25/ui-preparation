Array.prototype.myFlat = function(depth = 1) {
    let res = [];
    // `this` is basically the array on which myFlat() method is called...
    this.forEach(item => {
        if(Array.isArray(item) && depth > 0) {
            res.push(...item.myFlat(depth - 1));
        } else {
            res.push(item);
        }
    });

    return res;
}

const arr = [1, [2], [3, [4]]];
console.log(arr.myFlat());