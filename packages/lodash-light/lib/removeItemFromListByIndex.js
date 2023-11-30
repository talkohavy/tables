/**
 * @param {{list: Array<any>, index: number}} props
 * @returns {Array<any>}
 */
// TODO: make this toSpliced when you move to node 20
function removeItemFromListByIndex({ list, index }) {
  const newList = [...list];
  return newList.splice(index, 1);
}

export { removeItemFromListByIndex };
