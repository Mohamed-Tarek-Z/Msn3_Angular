import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { Bag } from '../../models/bag';
import { ProductService } from '../../services/product.service';
import { BagService } from '../../services/bag.service';

@Component({
  selector: 'app-wzn',
  templateUrl: './wzn.component.html',
  styleUrls: ['./wzn.component.css']
})
export class WznComponent implements OnInit {
  errMess!: string;
  bags!: Bag[];
  pros!: Product[];
  pro!:Product;
  constructor(private proService: ProductService, private bagService: BagService) { }

  ngOnInit(): void {
  }

}
