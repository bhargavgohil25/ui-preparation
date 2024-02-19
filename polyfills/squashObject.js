/**
 * @param {Object} obj
 * @return {Object}
 */
export default function squashObject(obj) {
  
  function squashHelper(obj_, path, res) {
    for(const [key, value] of Object.entries(obj_)) {
      if(typeof value !== 'object' || value === null) {
        res[path.concat(key).filter((key) => key).join('.')] = value;
      } else {
        squashHelper(value, path.concat(key), res);
      }
    }
  }

  const res = {};
  squashHelper(obj, [], res);
  return res;
}


const object = {
  a: 5,
  b: 6,
  c: {
    f: 9,
    g: {
      m: 17,
      n: 3,
    },
  },
};

squashObject(object); // { a: 5, b: 6, 'c.f': 9, 'c.g.m': 17, 'c.g.n': 3 }
const object = {
  foo: {
    '': { '': 1, 1bar: 2 },
  },
};
squashObject(object); // { foo: 1, 'foo.bar': 2 }

const object = { a: { b: [1, 2, 3], c: ['foo'] } };
squashObject(object); // { 'a.b.0': 1, 'a.b.1': 2, 'a.b.2': 3, 'a.c.0': 'foo' }