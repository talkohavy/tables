/**
 * @param {{list: Array<any>, filterBy: (item: any) => boolean}} props
 * @returns {Array<any>}
 */
function removeItemFromList({ list, filterBy }) {
  return list.filter(filterBy);
}

export { removeItemFromList };
