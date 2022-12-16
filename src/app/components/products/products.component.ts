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
  displayedColumns: string[] = ['Num', 'Name', 'Weight', 'Color'];
  clickedRows = new Set<Product>();
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
  }
}
