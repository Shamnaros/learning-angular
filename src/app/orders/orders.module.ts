import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { ProductsComponent } from './products/products.component';


@NgModule({
  declarations: [
    OrdersComponent,
    TableComponent,
    FormComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
