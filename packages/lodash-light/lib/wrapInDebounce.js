/**
 * @description Acts as a takeLatest function. A function wrapped with wrapInDebounce can be fired multiple times. On the first call, the clearTimeout(timer) step is not necessary since there is nothing scheduled yet.
 * But since the second time onwards, each invocation needs to reset the timer, or, in other words, cancel the previous calls to fnToRun, and reschedule it for a new time in the future.
 * This goes on as long as the visitor keeps hitting the keys under 300 ms. The last schedule won't get cleared, so that fnToRun() would finally be called.
 * @param { (outerArgs: any) => any } fnToRun - The function to debounce.
 * @param { number } milliseconds - The time to delay the function's activation.
 * @returns { (outerArgs: any) => any } Returns the accepted function, only now wrapped in debounce, so that it can now be called just like the original would.
 * @example
 * // How to use:
 * function saveInput(data = 'none') {
 *   console.log('Saving data', data);
 * }
 * const processChange = wrapInDebounce(saveInput, 4000);
 *
 * processChange(2);
 * processChange({ a: 1, b: 6 });
 * // output: Saving data { a: 1, b: 6 }
 */
function wrapInDebounce(fnToRun, milliseconds = 300) {
  let timerId;

  return (...args) => {
    if (timerId) clearTimeout(timerId);

    timerId = setTimeout(() => {
      timerId = null;
      fnToRun(...args); // This line is similar as to doing: fnToRun.apply(null, arguments); without passing outerArgs, which is something you might see in other people's code.
    }, milliseconds);
  };
}

export { wrapInDebounce };
