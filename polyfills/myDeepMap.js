/**
 * @param {any} value
 * @param {Function} fn
 * @returns any
 */
export default function deepMap(value, fn) {
  return makeDeepMap(value, fn, value);
}

const isPlainObject = (value) => {
  if(value === null) return false;

  const prototype = Object.getPrototypeOf(value);

  return prototype === null || prototype === Object.prototype;
}

const makeDeepMap = (value, fn, original) => {

  if(Array.isArray(value)) {
    return value.map((item) => makeDeepMap(item, fn, original));
  }

  if(isPlainObject(value)) {
    return Object.fromEntries(
      Object.entries(value).map(([key, value]) => [
        key,
        makeDeepMap(value, fn, original),
      ])
    );
  }

  return fn.call(original, value);
}


const double = (x) => x * 2;

deepMap(2, double); // 4
deepMap([1, 2, 3], double); // [4, 5, 6]
deepMap({ a: 1, b: 2, c: 3 }, double); // { a: 2, b: 4, c: 6 }
deepMap(
  {
    foo: 1,
    bar: [2, 3, 4],
    qux: { a: 5, b: 6 },
  },
  double,
); // => { foo: 2, bar: [4, 6, 8], qux: { a: 10, b: 12 } }