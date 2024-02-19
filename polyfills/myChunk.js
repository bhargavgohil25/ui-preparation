function myChunk(items, size = 1) {
    const output = [];
    if(size === 0) return output;

    for(let i = 0; i < items.length; i = i + size) {
        output.push(items.slice(i, i + size));
    }

    return output;
}

console.log(myChunk([1,2,3,4,5], 1))

console.log(myChunk([1,2,3,4,5], 2))
// [[1, 2], [3, 4], [5]]

console.log(myChunk([1,2,3,4,5], 3))
// [[1, 2, 3], [4, 5]]

console.log(myChunk([1,2,3,4,5], 4))
// [[1, 2, 3, 4], [5]]

console.log(myChunk([1,2,3,4,5], 5))
// [[1, 2, 3, 4, 5]]
