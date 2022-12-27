import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { Bag } from '../../models/bag';
import { FormControl } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { BagService } from '../../services/bag.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-wzn',
  templateUrl: './wzn.component.html',
  styleUrls: ['./wzn.component.css']
})
export class WznComponent implements OnInit {

  errMess!: string;

  proControl = new FormControl<string | Product>('');
  filteredOptions!: Observable<Product[]>;

  products!: Product[];
  product!: Product;

  bags!: Bag[];
  bag!: Bag;

  constructor(private proService: ProductService, private bagService: BagService) { }

  ngOnInit(): void {
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

    if (this.product != null) {
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

  onTypeSelect(){
    
  }

  onBagAdd(bag: unknown) {
    if (this.bags.every((p) => { return p._id != (bag as Bag)._id; })) {
      this.bagService.addBag(bag as Bag).subscribe({
        next: () => {
          location.reload();
        },
        error: (errmess) => {
          this.errMess = <any>errmess;
        }
      });
    } else {
      this.bagService.editBag((bag as Bag)._id as string, bag as Bag).subscribe({
        next: () => {
          location.reload();
        },
        error: (errmess) => {
          this.errMess = <any>errmess;
        }
      });
    }
  }

  onTableClick(bag: Bag) {
    this.bag = bag;
  }

  onDelet(id: string) {
    this.bagService.deletBag(id).subscribe({
      next: () => {
        location.reload();
      },
      error: (errmess) => {
        this.errMess = <any>errmess;
      }
    });
  }

}
