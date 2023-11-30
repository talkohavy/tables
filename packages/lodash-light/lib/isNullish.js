/**
 * @description This function accepts a value and check whether it's equal to null or to undefined.
 * @param { object } value - The value to check.
 * @returns { boolean } Returns if a certain value is nullish.
 */
function isNullish(value) {
  return value == null;
}

export { isNullish };
