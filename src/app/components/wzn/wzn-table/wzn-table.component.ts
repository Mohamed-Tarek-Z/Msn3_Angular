import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Bag } from '../../../models/bag';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-wzn-table',
  templateUrl: './wzn-table.component.html',
  styleUrls: ['./wzn-table.component.css'],
  animations: [
    trigger('detailExpand', [state('collapsed', style({ height: '0px', minHeight: '0' })), state('expanded', style({ height: '*' })), transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))])]
})

export class WznTableComponent {
  @Input() bags!: Bag[];
  displayedColumns: string[] = ['Num', 'pallet', 'lot', 'wightOfEmptyBag', 'numberOfCones', 'totalWight', 'netWight'];
  @Output() bagEmmiter: EventEmitter<Bag> = new EventEmitter();


  onClick(row: Bag): void {
    this.bagEmmiter.emit(this.bags[this.bags.indexOf(row)]);
  }


}
