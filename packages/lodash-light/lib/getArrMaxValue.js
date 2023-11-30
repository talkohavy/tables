/**
 * @description This function accepts an array of objects, and returns the maxValue based on some predicate which accepts a current item.
 * @param {{ arr: Array, predicate: (value: any) => number }} props
 * @returns { number } Returns a the maxValue.
 * @example
 *
 * const maxLength = getArrMaxValue({ arr: series, predicate: (item) => item.data.length });
 */
function getArrMaxValue({ arr, predicate }) {
  return arr.reduce((curMaxValue, curItem) => {
    const curValue = predicate(curItem);
    return curMaxValue > curValue ? curMaxValue : curValue;
  }, undefined);
}

export { getArrMaxValue };
