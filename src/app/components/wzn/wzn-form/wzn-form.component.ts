import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../models/product';
import { Bag } from '../../../models/bag';

@Component({
  selector: 'app-wzn-form',
  templateUrl: './wzn-form.component.html',
  styleUrls: ['./wzn-form.component.css']
})
export class WznFormComponent {
  @Input() bag!: Bag;
  @Input() type!: Product;
  @Output() emmiter: EventEmitter<Bag> = new EventEmitter();
  @Output() IdEmmiter: EventEmitter<string> = new EventEmitter();


  defBag: Bag = {
    type: this.type ,
    ,
    colorOfEmptyCone: ''
  }


  onSubmit(): void {
    this.emmiter.emit(this.bag as Bag);
  }

  onDelet(): void {
    this.IdEmmiter.emit((this.bag as Bag)._id);
  }

  onReset(): void {
    this.bag = this.defBag;
  }
}
