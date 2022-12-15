import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

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

import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';

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
    StockComponent
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
    MatTabsModule,

    FormsModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
