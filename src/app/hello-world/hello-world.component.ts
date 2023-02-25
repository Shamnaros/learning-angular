import { Component, ViewEncapsulation } from '@angular/core';
import { BootstrapServiceService } from '../bootstrap-service.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class HelloWorldComponent  {
  name:string; 
  // constructor() { 
  // this.name="AngularJs Wiki"
  // } 
  employee: Employee = new Employee('0','','','');

  constructor(private employeeService: BootstrapServiceService) {
    this.name="AngularJs Wiki"
  }

  onSubmit() {
    this.employeeService.addEmployee(this.employee);
    this.employee = new Employee('0','','','');
  }

}
