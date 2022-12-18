import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-pro-form',
  templateUrl: './pro-form.component.html',
  styleUrls: ['./pro-form.component.css']
})
export class ProFormComponent {
  @Output() proem: EventEmitter<Product> = new EventEmitter();
  pro: Product = {
    name: '',
    colorOfEmptyCone: '',
    wightOfEmptyCone: 0.0
  };

  onSubmit(): void {
    this.proem.emit(this.pro);
  }
}
