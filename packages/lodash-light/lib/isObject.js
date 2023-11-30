/**
 * @description This function accepts a variable and checks if it's of type object. NOTE: {} would return true, while [] and null would return false.
 * @param { object } toBeChecked - The value to be checked.
 * @returns { toBeChecked is Record<string, object> } Returns true or false.
 */
function isObject(toBeChecked) {
  return typeof toBeChecked === 'object' && !Array.isArray(toBeChecked) && toBeChecked !== null;
}

export { isObject };
