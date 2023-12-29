import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Order } from '../../models/order';
import { OrderService } from '../../services/order.service';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-ywmya',
  templateUrl: './ywmya.component.html',
  styleUrls: ['./ywmya.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class YwmyaComponent implements AfterViewInit {

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  orders!: Order[];
  dataSource = new MatTableDataSource(this.orders);
  displayedColumns: string[] = ['Num', 'Client', 'product', 'lot', 'Weight'];
  columnsToDisplayWithExpand = [...this.displayedColumns, 'expand'];
  errMess!: string;
  expandedElement!: Order;
  @ViewChild(MatSort) mysort!: MatSort;


  constructor(private orderService: OrderService, private _liveAnnouncer: LiveAnnouncer) { }

  ngAfterViewInit() {
    this.dataSource.sort = this.mysort;
  }

  announceSortChange(sortState: Sort | unknown) {
    if ((sortState as Sort).direction) {
      this._liveAnnouncer.announce(`Sorted ${(sortState as Sort).direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  onDatechange() {
    if ((this.range.controls.start.value != null && this.range.controls.end.value != null) && (this.range.controls.start.value < this.range.controls.end.value)) {
      this.orderService.getOrders(this.range.controls.start.value as Date, this.range.controls.end.value as Date).subscribe({
        next: (orders) => {
          this.orders = orders;
          this.dataSource = new MatTableDataSource(this.orders);
        },
        error: (errmess) => {
          this.errMess = <any>errmess;
alert(this.errMess);
        }
      });
    }
  }

  onDelet() {
    this.orderService.retriveOrderById(this.expandedElement._id as string).subscribe({
      next: () => {
        location.reload();
      },
      error: (errmess) => {
        this.errMess = <any>errmess;
alert(this.errMess);
      }
    });
  }
}
