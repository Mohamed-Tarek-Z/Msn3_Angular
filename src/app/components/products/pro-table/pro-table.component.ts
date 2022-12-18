import { Component, Input } from '@angular/core';
import { Product } from '../../../models/product';
@Component({
  selector: 'app-pro-table',
  templateUrl: './pro-table.component.html',
  styleUrls: ['./pro-table.component.css']
})
export class ProTableComponent {
  @Input() pros!: Product[];
  displayedColumns: string[] = ['Num', 'Name', 'Weight', 'Color'];
}
