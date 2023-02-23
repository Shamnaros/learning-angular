import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Employee } from './employee';
import { BootstrapList } from './bootstrap-list';


@Injectable({
  providedIn: 'root'
})


export class BootstrapServiceService {
  

  MyProperty1 :string | undefined;
  MyProperty2!: string;
  MyProperty3: string ='My Property String'
  MyProperty4: string = uuid();

  // constructor(private employeelist: Employee ) { }
  // constructor(private http:HttpClient) { }

  myMethod(){
    console.log("result if0");
    // return this.http.get('https://post.io/start/start-get');
  }

  private employees: Employee[] = [];
  
  getEmployees(): Employee[] {
    return this.employees;
  }
  addEmployee(employee: Employee) {
    this.employees.push(employee);
  }
}
