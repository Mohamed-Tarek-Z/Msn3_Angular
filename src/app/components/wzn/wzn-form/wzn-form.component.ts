import { Component, Input } from '@angular/core';
import { Bag } from '../../../models/bag';
import { BagService } from '../app/services/bag.service';

@Component({
  selector: 'app-wzn-form',
  templateUrl: './wzn-form.component.html',
  styleUrls: ['./wzn-form.component.css']
})
export class WznFormComponent {
  @Input() bag!: Bag;

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
