import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyComponent } from './components/empty/empty.component';
import { WznComponent } from './components/wzn/wzn.component';
import { EznComponent } from './components/ezn/ezn.component';
import { ProductsComponent } from './components/products/products.component';
import { StockComponent } from './components/stock/stock.component';
import { YwmyaComponent } from './components/ywmya/ywmya.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: EmptyComponent },
  { path: 'mizan', component: WznComponent },
  { path: 'ezn', component: EznComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'stock', component: StockComponent },
  { path: 'ywmya', component: YwmyaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
