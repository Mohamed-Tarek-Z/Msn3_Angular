import { Component, Input, Output, EventEmitter, OnChanges, OnInit } from '@angular/core';
import { Product } from '../../../models/product';
import { Bag } from '../../../models/bag';

@Component({
  selector: 'app-wzn-form',
  templateUrl: './wzn-form.component.html',
  styleUrls: ['./wzn-form.component.css']
})
export class WznFormComponent implements OnInit, OnChanges {
  @Input() bag!: Bag;
  @Input() type!: Product;
  @Output() emmiter: EventEmitter<Bag> = new EventEmitter();
  @Output() IdEmmiter: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    if (!this.bag) {
      this.bag = new Bag(this.type);
    }
  }

  ngOnChanges(): void {
    if (!this.bag) {
      this.bag = new Bag(this.type);
    }
    if (this.type._id != (this.bag.type as unknown) as string) {
      this.bag.type = this.type;
    }
  }

  onSubmit(): void {
    
    this.emmiter.emit(this.bag as Bag);
    
  }

  onDelet(): void {
    this.IdEmmiter.emit((this.bag as Bag)._id);
  }

  onReset(): void {
    this.bag = new Bag(this.type);
  }
}
