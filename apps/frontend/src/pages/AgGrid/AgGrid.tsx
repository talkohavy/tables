import { useMemo, useRef, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import useEventListener from '../../hooks/useEventListener';
import { dummyData } from './dummyData';
import 'ag-grid-enterprise';

export default function AgGrid() {
  const agGridRef = useRef<any>(null);
  const wrapperRef = useRef(null);

  useEventListener({ eventType: 'resize', element: window, fnToRun: sizeToFit, ms: 150, dependencies: [] });

  const columnDefs = useMemo(
    () => [
      { field: 'athlete', width: 150, suppressSizeToFit: true },
      {
        field: 'age',
        headerName: 'Age of Athlete',
        width: 90,
        minWidth: 50,
        maxWidth: 150,
      },
      { field: 'country', width: 120 },
      { field: 'year', width: 90 },
      { field: 'date', width: 110 },
      { field: 'sport', width: 110 },
      { field: 'gold', width: 100 },
      { field: 'silver', width: 100 },
      { field: 'bronze', width: 100 },
      { field: 'total', width: 100 },
    ],
    [],
  );

  function sizeToFit() {
    agGridRef.current?.api?.sizeColumnsToFit();
  }

  function autoSizeAll(skipHeader?: boolean) {
    const allColumnIds: Array<any> = [];

    agGridRef.current.columnApi.getColumns().forEach((column: any) => {
      allColumnIds.push(column.getId());
    });

    agGridRef.current.columnApi.autoSizeColumns(allColumnIds, skipHeader);
  }

  // @ts-ignore
  // eslint-disable-next-line
  const [rowData, setRowData] = useState(dummyData);

  return (
    <div className='ag-theme-alpine h-full w-full'>
      <div className='flex h-20 items-center justify-start gap-2'>
        <button
          type='button'
          onClick={sizeToFit}
          className='h-16 w-40 rounded-xl border border-black bg-red-500 text-white hover:rounded-2xl hover:bg-red-400'
        >
          Size To Fit
        </button>

        <button
          type='button'
          onClick={() => autoSizeAll()}
          className='h-16 w-40 rounded-xl border border-black bg-red-500 text-white hover:rounded-2xl hover:bg-red-400'
        >
          Auto Size All
        </button>

        <button
          type='button'
          onClick={() => autoSizeAll(true)}
          className='h-16 w-40 rounded-xl border border-black bg-red-500 text-white hover:rounded-2xl hover:bg-red-400'
        >
          Auto Size All (skip header)
        </button>
      </div>

      <div className='h-full w-full' ref={wrapperRef}>
        <AgGridReact
          ref={agGridRef}
          rowData={rowData}
          // @ts-ignore
          columnDefs={columnDefs}
          animateRows
          defaultColDef={{
            resizable: true,
            flex: 1,
            minWidth: 100,
            filter: true,
            sortable: true,
            enableValue: true,
            enablePivot: true,
            enableRowGroup: true,
          }}
          autoGroupColumnDef={{ minWidth: 200 }}
          onColumnResized={(params) => console.log(params)}
          suppressAutoSize
          sideBar={{
            toolPanels: [
              {
                id: 'columns',
                labelDefault: 'Columns',
                labelKey: 'columns',
                iconKey: 'columns',
                toolPanel: 'agColumnsToolPanel',
                toolPanelParams: {
                  suppressRowGroups: true,
                  suppressValues: true,
                  suppressPivots: true,
                  suppressPivotMode: true,
                  suppressColumnFilter: true,
                  suppressColumnSelectAll: true,
                  suppressColumnExpandAll: true,
                },
              },
            ],
            defaultToolPanel: 'columns',
            position: 'right',
          }}
          rowGroupPanelShow='always'
          // colResizeDefault='shift' // <--- switch between shift+drag & drag
          onCellEditRequest={() => console.log('onCellEditRequest')}
          onColumnVisible={() => sizeToFit()}
        />
      </div>
    </div>
  );
}
