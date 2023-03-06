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
import { HomeComponent } from './home/home.component';

import { BootstrapServiceService } from './bootstrap-service.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HelloWorldComponent,
    StudentComponent,
    JumbotronComponent,
    BootstrapFormComponent,
    BootstrapTableComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [BootstrapServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
