import { Component, ViewChild } from '@angular/core';
import { BootstrapTableComponent } from '../bootstrap-table/bootstrap-table.component';

@Component({
  selector: 'app-bootstrap-form',
  templateUrl: './bootstrap-form.component.html',
  styleUrls: ['./bootstrap-form.component.css']
})
export class BootstrapFormComponent {

  employee: { id: any, name: any, description: any, email: any } = { id: null, name: "", description: "", email: "" };
  @ViewChild(BootstrapTableComponent)
  form: BootstrapTableComponent = new BootstrapTableComponent;



  createEmployee() {
    console.log("Employee created: ", this.employee);
    this.employee = { id: null, name: "", description: "", email: "" };
    this.form.employees.push(this.employee)

  }
}