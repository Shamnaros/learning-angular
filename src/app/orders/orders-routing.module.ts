import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TableComponent } from './table/table.component';
import { ProductsComponent } from './products/products.component';
import { FormComponent } from './form/form.component';
import { OrdersComponent } from './orders.component';

const routes: Routes = [
  { path: 'orders', component: OrdersComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'table', component: TableComponent },
  { path: 'form', component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
