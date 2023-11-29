import { HotTable } from '@handsontable/react';

export default function Handsontable() {
  return (
    <div className='w-full h-full'>
      <div>here is my table:</div>
      <HotTable
        data={[
          ['', 'Tesla', 'Volvo', 'Toyota', 'Ford'],
          ['2019', 10, 11, 12, 13],
          ['2020', 20, 11, 14, 13],
          ['2021', 30, 15, 12, 13],
        ]}
        rowHeaders={true}
        colHeaders={true}
        minCols={19}
        maxCols={100}
        minRows={25}
        height='auto'
        width='100%'
        licenseKey='non-commercial-and-evaluation' // for non-commercial use only
      />
    </div>
  );
}
