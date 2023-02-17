import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { StudentComponent } from './student/student.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { BootstrapFormComponent } from './bootstrap-form/bootstrap-form.component';
import { BootstrapTableComponent } from './bootstrap-table/bootstrap-table.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HelloWorldComponent,
    StudentComponent,
    JumbotronComponent,
    BootstrapFormComponent,
    BootstrapTableComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
