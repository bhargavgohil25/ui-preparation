function myGet(source, path, defaultValue = undefined) {
    const props = Array.isArray(path) ?
        path :
        path.replaceAll('[', '.').replaceAll(']', '').split('.');

    let current = source;

    for(let i = 0; i < props.length; i++) {
        let key = props[i];

        if(current[key] === undefined) return defaultValue;

        if(i === props.length - 1) return current[key];
        else current = current[key];
    }
}

const obj = {
    a: {
      b: {
        c: [1,2,3]
      }
    }
  }
  

console.log(myGet(obj, 'a.b.c')) // [1,2,3]
console.log(myGet(obj, 'a.b.c.0')) // 1
console.log(myGet(obj, 'a.b.c[1]')) // 2
console.log(myGet(obj, ['a', 'b', 'c', '2'])) // 3
console.log(myGet(obj, 'a.b.c[3]')) // undefined
console.log(myGet(obj, 'a.c', 'bfe')) // 'bfe'