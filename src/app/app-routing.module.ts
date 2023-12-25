import { NgModule } from '@angular/core';

import { AuthGuardService as AuthGuard } from './services/auth-guard.service';

import { RouterModule, Routes } from '@angular/router';
import { EmptyComponent } from './components/empty/empty.component';
import { WznComponent } from './components/wzn/wzn.component';
import { EznComponent } from './components/ezn/ezn.component';
import { ProductsComponent } from './components/products/products.component';
import { StockComponent } from './components/stock/stock.component';
import { YwmyaComponent } from './components/ywmya/ywmya.component';
import { ClientsComponent } from './components/clients/clients.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: RegistrationPageComponent },
  { path: 'home', component: EmptyComponent },
  { path: 'mizan', component: WznComponent, canActivate: [AuthGuard] },
  { path: 'stock', component: StockComponent, canActivate: [AuthGuard] },
  { path: 'ezn', component: EznComponent, canActivate: [AuthGuard] },
  { path: 'products', component: ProductsComponent, canActivate: [AuthGuard] },
  { path: 'ywmya', component: YwmyaComponent, canActivate: [AuthGuard] },
  { path: 'clients', component: ClientsComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
