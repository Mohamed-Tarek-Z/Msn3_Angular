import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products!: Product[];
  product!: Product;
  errMess!: string;

  constructor(private proService: ProductService) { }

  ngOnInit(): void {
    this.proService.getProducts().subscribe({
      next: (pros) => {
        this.products = pros;
      },
      error: (errmess) => {
        this.errMess = <any>errmess;
alert(this.errMess);
      }
    });
  }

  onProAdd(pro: unknown) {
    if (this.products.every((p) => { return p._id != (pro as Product)._id; })) {
      this.proService.addProduct(pro as Product).subscribe({
        next: () => {
          location.reload();
        },
        error: (errmess) => {
          this.errMess = <any>errmess;
alert(this.errMess);
        }
      });
    } else {
      this.proService.editProduct((pro as Product)._id as string, pro as Product).subscribe({
        next: () => {
          location.reload();
        },
        error: (errmess) => {
          this.errMess = <any>errmess;
alert(this.errMess);
        }
      });
    }
  }

  onTableClick(pro: Product) {
    this.product = pro;
  }

  onDelet(id: string) {
    this.proService.deletProduct(id).subscribe({
      next: () => {
        location.reload();
      },
      error: (errmess) => {
        this.errMess = <any>errmess;
alert(this.errMess);
      }
    });
  }
}
