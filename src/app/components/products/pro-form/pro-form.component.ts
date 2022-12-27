import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-pro-form',
  templateUrl: './pro-form.component.html',
  styleUrls: ['./pro-form.component.css']
})
export class ProFormComponent implements OnInit {
  @Input() pro!: Product;
  @Output() emmiter: EventEmitter<Product> = new EventEmitter();
  @Output() IdEmmiter: EventEmitter<string> = new EventEmitter();


  ngOnInit(): void {
    if (!this.pro) {
      this.pro = {
        name: '',
        wightOfEmptyCone: 0.0,
        colorOfEmptyCone: ''
      };
    }
  }

  onSubmit(): void {
    this.emmiter.emit(this.pro as Product);
  }

  onDelet(): void {
    this.IdEmmiter.emit((this.pro as Product)._id);
  }

  onReset(): void {
    this.pro = {
      name: '',
      wightOfEmptyCone: 0.0,
      colorOfEmptyCone: ''
    };
  }
}
