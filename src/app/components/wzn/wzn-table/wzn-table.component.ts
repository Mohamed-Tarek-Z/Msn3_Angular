import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Product } from '../../../models/product';
import { Bag } from '../../../models/bag';
import { BagService } from '../../../services/bag.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-wzn-table',
  templateUrl: './wzn-table.component.html',
  styleUrls: ['./wzn-table.component.css'],
  animations: [
    trigger('detailExpand', [state('collapsed', style({ height: '0px', minHeight: '0' })), state('expanded', style({ height: '*' })), transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))])]
})

export class WznTableComponent {
  @Input() type!: Product;
  bags!: Bag[];
  displayedColumns: string[] = ['Num', 'pallet', 'lot', 'wightOfEmptyBag', 'numberOfCones', 'totalWight', 'netWight'];
  expandedBag!: Bag | null;
  @Output() bagEmmiter: EventEmitter<Bag> = new EventEmitter();
  @Output() errEmmiter: EventEmitter<string> = new EventEmitter();
  constructor(private bagService: BagService) { }

  ngOnInit(): void {
    this.bagService.getBags(this.type._id as string).subscribe({
      next: (bags) => {
        this.bags = bags;
      },
      error: (errmess) => {
        this.errEmmiter.emit(errmess);
      }
    });
  }
}
