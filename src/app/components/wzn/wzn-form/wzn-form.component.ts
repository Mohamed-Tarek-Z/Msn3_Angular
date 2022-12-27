import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Product } from '../../../models/product';
import { Bag } from '../../../models/bag';

@Component({
  selector: 'app-wzn-form',
  templateUrl: './wzn-form.component.html',
  styleUrls: ['./wzn-form.component.css']
})
export class WznFormComponent implements OnInit {
  errMess!: string
  @Input() bag!: Bag;
  @Input() type!: Product;
  @Output() emmiter: EventEmitter<Bag> = new EventEmitter();
  @Output() IdEmmiter: EventEmitter<string> = new EventEmitter();


  ngOnInit(): void {
    if (!this.type) {
      this.errMess = 'product emp';
    }
    if (!this.bag) {
      this.bag = {
        type: this.type,
        lot: '',
        pallet: 0,
        numberOfCones: 0,
        wightOfEmptyBag: 0,
        totalWight: 0,
        netWight: 0,
        marked: false,
        box: false
      };
    }
  }

  onSubmit(): void {
    this.emmiter.emit(this.bag as Bag);
  }

  onDelet(): void {
    this.IdEmmiter.emit((this.bag as Bag)._id);
  }

  onReset(): void {
    this.bag = {
      type: this.type,
      lot: '',
      pallet: 0,
      numberOfCones: 0,
      wightOfEmptyBag: 0,
      totalWight: 0,
      netWight: 0,
      marked: false,
      box: false
    };
  }
}
