/**
 * @param {*} valueA
 * @param {*} valueB
 * @return {boolean}
 */

const checkBothArrays = (valueA, valueB) => Array.isArray(valueA) && Array.isArray(valueB);
const checkBothObjects = (valueA, valueB) =>  
  Object.prototype.toString.call(valueA) === '[object Object]' &&
  Object.prototype.toString.call(valueB) === '[object Object]';

export default function deepEqual(valueA, valueB, map = new Map()) {
  if(Object.is(valueA, valueB)) return true;

  const isBothObjects = checkBothObjects(valueA, valueB);
  const isBothArrays  = checkBothArrays(valueA, valueB);

  if(!isBothArrays && !isBothObjects) {
    return false;
  }

  if(map.has(valueA) && (map.get(valueA) === valueB)) {
    return true;
  }

  map.set(valueA, valueB);

  const aKeys = Object.keys(valueA);
  const bKeys = Object.keys(valueB);

  if(aKeys.length !== bKeys.length) return false;

  for(const key in valueA) {
    if(!deepEqual(valueA[key], valueB[key], map)) {
      return false;
    }
  }

  return true;
}


deepEqual('foo', 'foo'); // true
deepEqual({ id: 1 }, { id: 1 }); // true
deepEqual([1, 2, 3], [1, 2, 3]); // true
deepEqual([{ id: '1' }], [{ id: '2' }]); // false