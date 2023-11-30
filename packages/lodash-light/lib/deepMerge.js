import { isObject } from './isObject.js';

/**
 * @param { object } obj1 - The weaker object.
 * @param { object } obj2 - The stronger object.
 * @returns { object } A copy of the two objects deeply merged.
 * @example
 * const first = { a: 'tal', b: { aaa: { one: 1 }, bbb: true, ccc: 'yes!' }, c: [1,2,3] };
 * const second = { a: 'daniel', b: { ccc: 'no' }, c: [1,2], d: 'new' };
 *
 * console.log(deepMerge(first,second)); // Expected result: { a: "daniel", b: { aaa: { one: 1 }, bbb: true, ccc: "noooo" }, c: [1,2], d: 'new' }
 */
// Note! this must be an arrow function!
const deepMerge = (obj1, obj2) =>
  [...new Set([...Object.keys(obj1), ...Object.keys(obj2)])].reduce(
    (acc, key) => ({
      ...acc,
      [key]:
        obj1[key] && obj2[key] && isObject(obj1[key]) && isObject(obj2[key])
          ? deepMerge(obj1[key], obj2[key])
          : obj2[key] ?? obj1[key],
    }),
    {},
  );

export { deepMerge };
