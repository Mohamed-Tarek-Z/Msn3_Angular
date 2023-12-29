import { Component, OnInit } from '@angular/core';
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
  displayedColumns: string[] = ['Name', 'Lot', 'TotWeight'];
  errMess!: string;

  constructor(private bagService: BagService) { }

  ngOnInit(): void {
    this.bagService.getStock().subscribe({
      next: (data) => {
        this.dataSource.data = this.summarizeStockItems(data);
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
      summary.push({ itemName, lot, wight });
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

}
