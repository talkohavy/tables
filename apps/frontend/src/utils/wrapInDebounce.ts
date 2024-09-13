function wrapInDebounce(fnToRun: (props?: any) => any, milliseconds: number = 300) {
  let timerId: any;

  return (...args: any[]) => {
    if (timerId) clearTimeout(timerId);

    timerId = setTimeout(() => {
      timerId = null;
      fnToRun(...args); // This line is similar as to doing: fnToRun.apply(null, arguments); without passing outerArgs, which is something you might see in other people's code.
    }, milliseconds);
  };
}

export { wrapInDebounce };
