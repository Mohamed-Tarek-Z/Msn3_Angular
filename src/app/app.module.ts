import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { HeaderComponent } from './components/header/header.component';
import { WznComponent } from './components/wzn/wzn.component';
import { ProductsComponent } from './components/products/products.component';
import { EznComponent } from './components/ezn/ezn.component';
import { EmptyComponent } from './components/empty/empty.component';
import { YwmyaComponent } from './components/ywmya/ywmya.component';
import { StockComponent } from './components/stock/stock.component';

import { ProTableComponent } from './components/products/pro-table/pro-table.component';
import { ProFormComponent } from './components/products/pro-form/pro-form.component';

import { AuthInterceptor, UnauthorizedInterceptor } from './services/auth.interceptor';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';


import { FormsModule } from '@angular/forms';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import { WznTableComponent } from './components/wzn/wzn-table/wzn-table.component';
import { WznFormComponent } from './components/wzn/wzn-form/wzn-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    HeaderComponent,
    WznComponent,
    ProductsComponent,
    EznComponent,
    EmptyComponent,
    YwmyaComponent,
    StockComponent,
    ProTableComponent,
    ProFormComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    WznTableComponent,
    WznFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatGridListModule,
    MatIconModule,

    FormsModule,

    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UnauthorizedInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
