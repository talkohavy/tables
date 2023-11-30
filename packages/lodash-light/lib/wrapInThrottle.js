// --------------------
// Function 8: Throttle
// --------------------
/**
 * @description
 * Acts as a throttle function. A function wrapped with wrapInThrottle can be fired multiple times, but only the
 * first invokation would be taken under consideration. The rest of the calls, that are under X seconds since the
 * first* call, would be ignored.
 * @param { (outerArgs: any) => any } fnToRun - The function to throttle.
 * @param { number } milliseconds - The time to delay subsequent calls to the function. **Default is 300ms**.
 * @returns { (outerArgs: any) => any } Returns the accepted function, only now wrapped in a throttle, so that it can now be called just like the original would.
 * @example
 * // How to use:
 * function saveInput(data = 'none') {
 *   console.log('Saving data', data);
 * }
 * const processChange = wrapInThrottle(saveInput, 4000);
 *
 * processChange(2);
 * processChange({ a: 1, b: 6 });
 * // output: 2
 */
function wrapInThrottle(fnToRun, milliseconds = 300) {
  let alreadyExecuting = false;

  return (...args) => {
    if (alreadyExecuting) return;

    fnToRun(...args); // execute the first one...

    alreadyExecuting = true;
    setTimeout(() => (alreadyExecuting = false), milliseconds);
  };
}

export { wrapInThrottle };
