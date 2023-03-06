import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HelloWorldComponent } from './hello-world/hello-world.component';
import { BootstrapTableComponent } from './bootstrap-table/bootstrap-table.component';
import { BootstrapFormComponent } from './bootstrap-form/bootstrap-form.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { StudentComponent } from './student/student.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "", component: LoginComponent},
  {path:  "Home", component: HomeComponent},
  {path: "jumbotron", component: JumbotronComponent},
  {path: "bootstrap-form", component: BootstrapFormComponent},
  {path: "bootstrap-table", component: BootstrapTableComponent},
  {path: "Student", component: StudentComponent},
  {path: "Product", component: ProductListComponent},
  {path: "HelloWorldComponent", component: HelloWorldComponent},
  {path: "feature", loadChildren: () => import('./feature-module/feature-module.module').then(m => m.FeatureModuleModule) },
  {path: "orders", loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
