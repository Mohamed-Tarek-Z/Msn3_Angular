import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Product } from '../../../models/product';
@Component({
  selector: 'app-pro-table',
  templateUrl: './pro-table.component.html',
  styleUrls: ['./pro-table.component.css']
})
export class ProTableComponent {
  @Input() pros!: Product[];
  @Output() emmiter: EventEmitter<number> = new EventEmitter();
  displayedColumns: string[] = ['Num', 'Name', 'Weight', 'Color'];

  onClick(row: Product): void {
    this.emmiter.emit(this.pros.indexOf(row));
  }
}
