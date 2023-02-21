import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-bootstrap-table',
  templateUrl: './bootstrap-table.component.html',
  styleUrls: ['./bootstrap-table.component.css']
})
export class BootstrapTableComponent  {

  employees = [
    {id: 1, name: "name 1111", description: "1111 description description", email: "1111nameemail@gmail.com"},
    {id: 2, name: "name 2222", description: "2222 description description", email: "2222nameemail@gmail.com"},
    {id: 3, name: "name 3333", description: "3333 description description", email: "3333nameemail@gmail.com"},
    {id: 4, name: "name 44444", description: "4444 description description", email: "4444nameemail@gmail.com"}
  ];
  selectedEmployee: any;
  // console.log(employees);


  

  public createEmployee(e: {id: number, name: string, description: string, email: string}){
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
