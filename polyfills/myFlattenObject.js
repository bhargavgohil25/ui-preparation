const myFlattenObject = (obj, parent = "") => {
  const finalObj = {};

  const generateFlatObjects = (obj, parent) => {
    for(let key in obj) {
      const newParent = parent + key;
      const value = obj[key];
      if(typeof value === 'object') {
        generateFlatObjects(value, newParent + ".");
      } else {
        finalObj[newParent] = value;
      }
    }
  }

  generateFlatObjects(obj, parent);

  return finalObj;
}


const obj = {
  a: "12",
  b: 23,
  c: {
    p: 12,
    o: {
      l: 667,
    },
    q: [1, 2, 3]
  }
};

console.log(myFlattenObject(obj));