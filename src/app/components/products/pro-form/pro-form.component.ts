import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-pro-form',
  templateUrl: './pro-form.component.html',
  styleUrls: ['./pro-form.component.css']
})
export class ProFormComponent {
  @Input() pro!: Product;
  @Output() emmiter: EventEmitter<Product> = new EventEmitter();
  
  onSubmit(): void {
    this.emmiter.emit(this.pro as Product);
  }
}
