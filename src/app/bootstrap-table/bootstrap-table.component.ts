import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { BootstrapServiceService } from '../bootstrap-service.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-bootstrap-table',
  templateUrl: './bootstrap-table.component.html',
  styleUrls: ['./bootstrap-table.component.css']
})
export class BootstrapTableComponent implements OnInit {
  employees: Employee[] = [];
  employeee: any[] = [];
  tt : number = 0;

  employee = [
    {id: '1', name: "name 1111", email: "1111nameemail@gmail.com", description: "1111 description description"}
  ]; 

  constructor(private employeeService: BootstrapServiceService) {}

  ngOnInit() {
    this.employees = this.employeeService.getEmployees();
    this.employeee.push(this.employee)
    this.tt = this.employeee.length;
    console.log(this.employeee)

  }
  // employees = [
  //   {id: '1', name: "name 1111", email: "1111nameemail@gmail.com", description: "1111 description description"},
  //   {id: '2', name: "name 2222", email: "2222nameemail@gmail.com", description: "2222 description description"},
  //   {id: '3', name: "name 3333", email: "3333nameemail@gmail.com", description: "3333 description description"},
  //   {id: '4', name: "name 4444", email: "4444nameemail@gmail.com", description: "4444 description description"}
  // ];
  selectedEmployee: any;
  // console.log(employees);

  

  public createEmployee(e: {id: string, name: string, description: string, email: string}){
    this.employees.push(e);
  }
  
  public selectEmployee(e: any){
    this.selectedEmployee = e;
  }

  shows = true;
  count : number =0;

  userObservable = new Subject<{first: string, last: string}>();
  first = ['John', 'Mike', 'Mary', 'Bob'];
  firstIndex = 0;
  last = ['Smith', 'Novotny', 'Angular'];
  lastIndex = 0;

  nextUser() {
    let first = this.first[this.firstIndex++];
    if (this.firstIndex >= this.first.length) this.firstIndex = 0;
    let last = this.last[this.lastIndex++];
    if (this.lastIndex >= this.last.length) this.lastIndex = 0;
    this.userObservable.next({first, last});
  }
  
}
