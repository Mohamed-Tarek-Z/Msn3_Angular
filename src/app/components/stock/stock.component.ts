import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { Bag } from '../../models/bag';
import { BagService } from '../../services/bag.service';

import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {


  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['select', 'Name', 'Lot', 'TotWeight'];
  selection = new SelectionModel<any>(true, []);
  errMess!: string;

  constructor(private bagService: BagService) { }

  ngOnInit(): void {
    this.bagService.getStock().subscribe({
      next: (data) => {
        this.dataSource.data = this.addEditFlag(this.summarizeStockItems(data));
      },
      error: (errmess) => {
        this.errMess = <any>errmess;
        alert(this.errMess);
      }
    });
  }


  private summarizeStockItems(items: Bag[]): any[] {
    let summaryMap = new Map();

    for (let item of items) {
      let itemName = item.type.name;
      let lot = item.lot;
      let wight = item.netWight;

      let key = `${itemName}-${lot}`;

      if (summaryMap.has(key)) {
        summaryMap.set(key, summaryMap.get(key) + wight);
      } else {
        summaryMap.set(key, wight);
      }
    }

    let summary: any[] = [];
    summaryMap.forEach((wight, key) => {
      let [itemName, lot] = key.split('-');
      summary.push({ itemName, lot, wight, editing: false });
    });

    return summary;
  }


  sortData(event: any): void {
    const data = this.dataSource.data.slice();
    if (event.active === 'itemName') {
      data.sort((a, b) => a.itemName.localeCompare(b.itemName) * this.getSortDirection(event));
    } else if (event.active === 'lot') {
      data.sort((a, b) => a.lot.localeCompare(b.lot) * this.getSortDirection(event));
    }
    this.dataSource.data = data;
  }

  private getSortDirection(event: any): number {
    return event.direction === 'asc' ? 1 : -1;
  }

  isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle(): void {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  // Enable editing for selected rows
  editSelectedRows(): void {
    this.selection.selected.forEach((row) => (row.editing = true));
  }

  // Save changes for edited rows
  saveChanges(): void {
    this.selection.selected.forEach((row) => (row.editing = false));
    this.selection.clear();
  }

  // Add an 'editing' flag to each row for tracking edit mode
  private addEditFlag(data: any[]): any[] {
    return data.map((item) => ({ ...item, editing: false }));
  }


  // no edit needed just trying new style so data not really effected 
  // if data need to be edited from here add edit logic to saveChanges function
}
