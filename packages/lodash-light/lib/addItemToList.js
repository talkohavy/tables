/**
 * @param {{list: Array<any>, newItem: any}} props
 * @returns {Array<any>}
 */
function addItemToList({ list, newItem }) {
  return list.concat(newItem);
}

export { addItemToList };
