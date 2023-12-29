import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { Bag } from '../../models/bag';
import { Order } from '../../models/order';
import { FormControl } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { BagService } from '../../services/bag.service';
import { OrderService } from '../../services/order.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-ezn',
  templateUrl: './ezn.component.html',
  styleUrls: ['./ezn.component.css']
})
export class EznComponent implements OnInit {

  errMess!: string;

  count_wight!: number;

  proControl = new FormControl<string | Product>('');
  filteredOptions!: Observable<Product[]>;

  products!: Product[];
  product!: Product;
  bags!: Bag[];

  constructor(private proService: ProductService, private bagService: BagService, private orderService: OrderService) { }

  ngOnInit(): void {
    this.product = new Product();
    this.proService.getProducts().subscribe({
      next: (pros) => {
        this.products = pros;
        this.filteredOptions = this.proControl.valueChanges.pipe(
          startWith(''),
          map(value => {
            const name = typeof value === 'string' ? value : value?.name;
            return name ? this._filter(name as string) : this.products.slice();
          })
        );
      },
      error: (errmess) => {
        this.errMess = <any>errmess;
      }
    });

    if (this.product._id != null) {
      this.bagService.getBags(this.product._id as string).subscribe({
        next: (bags) => {
          this.bags = bags;
        },
        error: (errmess) => {
          this.errMess = <any>errmess;
        }
      });
    }
  }

  private _filter(name: string): Product[] {
    const filterValue = name.toLowerCase();

    return this.products.filter(option => option.name.toLowerCase().includes(filterValue));
  }
  displayFn(pro: Product): string {
    return pro && pro.name ? pro.name : '';
  }

  onTypeSelect() {
    this.product = this.proControl.value as Product;
    this.bagService.getBags(this.product._id as string).subscribe({
      next: (bags) => {
        this.bags = bags;
        // we should add logic for selection table 
      },
      error: (errmess) => {
        this.errMess = <any>errmess;
      }
    });
  }

}
