import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  pros!: Product[];
  errMess!: string;
  ind!: number;

  constructor(private proService: ProductService) { }

  ngOnInit(): void {
    this.proService.getProducts().subscribe({
      next: (pros) => {
        this.pros = pros;
      },
      error: (errmess) => {
        this.errMess = <any>errmess;
      }
    });
    this.ind = -1;
  }

  onProAdd(pro: unknown) {
    if (this.pros.every((p) => { return p._id != (pro as Product)._id; })) {
      this.proService.addProduct(pro as Product).subscribe({
        next: () => {
          location.reload();
        },
        error: (errmess) => {
          this.errMess = <any>errmess;
        }
      });
    } else {
      this.proService.editProduct((pro as Product)._id as string, pro as Product).subscribe({
        next: () => {
          location.reload();
        },
        error: (errmess) => {
          this.errMess = <any>errmess;
        }
      });
    }
  }

  onTableClick(ind: number) {
    this.ind = ind;
  }

  onDelet(id: string) {
    this.proService.deletProduct(id).subscribe({
      next: () => {
        location.reload();
      },
      error: (errmess) => {
        this.errMess = <any>errmess;
      }
    });
  }
}
