import { HttpClient } from '@angular/common/http';
import { RedComponentComponent } from './../red-component/red-component.component';
import { Component, OnInit } from '@angular/core';
import { GridOptions, NavigateToNextCellParams } from 'ag-grid';
import { debug } from 'util';


@Component({
  selector: 'app-my-grid-application',
  templateUrl: './my-grid-application.component.html',
  styleUrls: ['./my-grid-application.component.css']
})
export class MyGridApplicationComponent implements OnInit {

  public localeText: any;
  public gridOptions: GridOptions;
  private gridApi: any;
  private gridColumnApi: any;

  constructor() {
    this.gridOptions = <GridOptions>{};
      this.gridOptions.columnDefs = [
          {
            headerName: 'Athlete',
            field: 'athlete',
            hide: true,
            cellRendererFramework: RedComponentComponent
          },
          {
            headerName: 'Age',
            field: 'age',
            width: 90,
            enableValue: true,
          },
          {
            headerName: 'Country',
            field: 'country',
            width: 120,
          },
          {
            headerName: 'Year',
            field: 'year',
            width: 90,
          },
          {
            headerName: 'Date',
            field: 'date',
            width: 110
          },
          {
            headerName: 'Sport',
            field: 'sport',
            width: 110,
          },
          {
            headerName: 'Gold',
            field: 'gold',
            width: 100
          },
          {
            headerName: 'Silver',
            field: 'silver',
            width: 100
          },
          {
            headerName: 'Bronze',
            field: 'bronze',
            width: 100
          },
          {
            headerName: 'Total',
            field: 'total',
            width: 100
          }
      ];

      this.gridOptions.rowSelection = 'single';
      this.gridOptions.onSelectionChanged = this.onSelectionChanged;
      this.gridOptions.onGridReady = this.onGridReady;
      this.gridOptions.navigateToNextCell = this.onNavigateToNextCell;

      this.gridOptions.rowData = [
        {
          'athlete': 'Michael Phelps',
          'age': 23,
          'country':
          'United States',
          'year': 2008,
          'date': '24/08/2008',
          'sport': 'Swimming',
          'gold': 8,
          'silver': 0,
          'bronze': 0,
          'total': 8
        },
        {
          'athlete': 'Michael Phelps',
          'age': 23,
          'country':
          'United States',
          'year': 2008,
          'date': '24/08/2008',
          'sport': 'Swimming',
          'gold': 8,
          'silver': 0,
          'bronze': 0,
          'total': 8
        },
        {
          'athlete': 'Michael Phelps',
          'age': 23,
          'country':
          'United States',
          'year': 2008,
          'date': '24/08/2008',
          'sport': 'Swimming',
          'gold': 8,
          'silver': 0,
          'bronze': 0,
          'total': 8
        },
        {
          'athlete': 'Michael Phelps',
          'age': 23,
          'country':
          'United States',
          'year': 2008,
          'date': '24/08/2008',
          'sport': 'Swimming',
          'gold': 8,
          'silver': 0,
          'bronze': 0,
          'total': 8
        },
        {
          'athlete': 'Michael Phelps',
          'age': 23,
          'country':
          'United States',
          'year': 2008,
          'date': '24/08/2008',
          'sport': 'Swimming',
          'gold': 8,
          'silver': 0,
          'bronze': 0,
          'total': 8
        },
        {
          'athlete': 'Michael Phelps',
          'age': 23,
          'country':
          'United States',
          'year': 2008,
          'date': '24/08/2008',
          'sport': 'Swimming',
          'gold': 8,
          'silver': 0,
          'bronze': 0,
          'total': 8
        },
        {
          'athlete': 'Michael Phelps',
          'age': 23,
          'country':
          'United States',
          'year': 2008,
          'date': '24/08/2008',
          'sport': 'Swimming',
          'gold': 8,
          'silver': 0,
          'bronze': 0,
          'total': 8
        },
        {
          'athlete': 'Michael Phelps',
          'age': 23,
          'country':
          'United States',
          'year': 2008,
          'date': '24/08/2008',
          'sport': 'Swimming',
          'gold': 8,
          'silver': 0,
          'bronze': 0,
          'total': 8
        },
        {
          'athlete': 'Michael Phelps',
          'age': 23,
          'country':
          'United States',
          'year': 2008,
          'date': '24/08/2008',
          'sport': 'Swimming',
          'gold': 8,
          'silver': 0,
          'bronze': 0,
          'total': 8
        },
        {
          'athlete': 'Michael Phelps',
          'age': 23,
          'country':
          'United States',
          'year': 2008,
          'date': '24/08/2008',
          'sport': 'Swimming',
          'gold': 8,
          'silver': 0,
          'bronze': 0,
          'total': 8
        },
        {
          'athlete': 'Michael Phelps',
          'age': 23,
          'country':
          'United States',
          'year': 2008,
          'date': '24/08/2008',
          'sport': 'Swimming',
          'gold': 8,
          'silver': 0,
          'bronze': 0,
          'total': 8
        },
        {
          'athlete': 'Michael Phelps',
          'age': 23,
          'country':
          'United States',
          'year': 2008,
          'date': '24/08/2008',
          'sport': 'Swimming',
          'gold': 8,
          'silver': 0,
          'bronze': 0,
          'total': 8
        },
        {
          'athlete': 'Michael Phelps',
          'age': 23,
          'country':
          'United States',
          'year': 2008,
          'date': '24/08/2008',
          'sport': 'Swimming',
          'gold': 8,
          'silver': 0,
          'bronze': 0,
          'total': 8
        },
        {
          'athlete': 'Michael Phelps',
          'age': 23,
          'country':
          'United States',
          'year': 2008,
          'date': '24/08/2008',
          'sport': 'Swimming',
          'gold': 8,
          'silver': 0,
          'bronze': 0,
          'total': 8
        },

      ];

      this.gridOptions.enableColResize = true;
      this.gridOptions.onGridSizeChanged = this.onGridSizeChanged;
      this.gridOptions.enableFilter = true;

      this.gridOptions.localeText = {
        filterOoo: 'Filtrar ...',
        notEqual: 'Não igual',
        equals: 'Igual',
        lessThan: 'Menor que',
        greaterThan: 'Maior que',
        contains: 'Contém',
        notContains: 'Não contém',
        startsWith: 'Começa com',
        endsWith: 'Termina com',
        noRowsToShow: 'Sem resultados!',
      };
  }

  ngOnInit() {}

  onGridSizeChanged(params) {
    const gridWidth = document.getElementById('grid-wrapper').offsetWidth;
    const columnsToShow = [];
    const columnsToHide = [];

    let totalColsWidth = 0;
    const allColumns = params.columnApi.getAllColumns();

    for (let i = 0; i < allColumns.length; i++) {
      const column = allColumns[i];

      totalColsWidth += column.getMinWidth();
      if (totalColsWidth > gridWidth) {
        columnsToHide.push(column.colId);
      } else {
        columnsToShow.push(column.colId);
      }
    }

    params.columnApi.setColumnsVisible(columnsToShow, true);
    params.columnApi.setColumnsVisible(columnsToHide, false);
    params.api.sizeColumnsToFit();
  }

  onSelectionChanged() {
    const selectedRows = this.gridApi.getSelectedRows();
    console.log(selectedRows);
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
  onNavigateToNextCell(params): any {
    let previousCell = params.previousCellDef;
    const suggestedNextCell = params.nextCellDef;

    const KEY_UP = 38;
    const KEY_DOWN = 40;
    const KEY_LEFT = 37;
    const KEY_RIGHT = 39;

    switch (params.key) {
        case KEY_DOWN:
            previousCell = params.previousCellDef;
            // set selected cell on current cell + 1
            previousCell.column.gridApi.forEachNode( (node) => {
                if (previousCell.rowIndex + 1 === node.rowIndex) {
                    node.setSelected(true);
                }
            });
            return suggestedNextCell;
        case KEY_UP:
            previousCell = params.previousCellDef;
            // set selected cell on current cell - 1
            previousCell.column.gridApi.forEachNode( (node) => {
                if (previousCell.rowIndex - 1 === node.rowIndex) {
                    node.setSelected(true);
                }
            });
            return suggestedNextCell;
        case KEY_LEFT:
        case KEY_RIGHT:
            return suggestedNextCell;
        default:
            throw new Error('this will never happen, navigation is always on of the 4 keys above');
    }
  }
}
