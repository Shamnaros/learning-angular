import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { v4 as uuid } from 'uuid';
import { BootstrapServiceService } from '../bootstrap-service.service';
import { Employee } from '../employee';


import { BootstrapTableComponent } from '../bootstrap-table/bootstrap-table.component';


@Component({
  selector: 'app-bootstrap-form',
  templateUrl: './bootstrap-form.component.html',
  styleUrls: ['./bootstrap-form.component.css']
})
export class BootstrapFormComponent {
  id: string = uuid();
  employee: Employee = new Employee(this.id,'','','');

  constructor(
    private employeeService: BootstrapServiceService, 
    private router:Router
    ) { }

  // constructor(private router:Router){}

  list: string[] = [];

  // employee: { id: any, name: any, description: any, email: any } = { id: uuid(), name: "", description: "", email: "" };
  // @ViewChild(BootstrapTableComponent)
  // form: BootstrapTableComponent = new BootstrapTableComponent;
  
  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }


  createEmployee() {
    this.employeeService.addEmployee(this.employee);
    this.employee = new Employee(this.id,'','','');
    // console.log("Employee created: ", this.employee);
    // this.employee = { id: "", name: "", description: "", email: "" };
    // this.form.createEmployee(this.employee)

  }
  createId(){
    console.log(typeof uuid(), uuid());
    this.list.push(uuid());
  }
 

  onSubmit() {
    this.employeeService.addEmployee(this.employee);
    this.employee = new Employee(this.id,'','','');
  }
}


