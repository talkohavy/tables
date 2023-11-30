/** @param {{ howMany: number, funcToRun: (i:number) => void }} props */
function times({ howMany, funcToRun }) {
  for (let i = 0; i < howMany; i++) funcToRun(i);
}

export { times };
