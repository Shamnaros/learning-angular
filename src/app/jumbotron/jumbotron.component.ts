import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BootstrapServiceService } from '../bootstrap-service.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class JumbotronComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private employeeService: BootstrapServiceService) {}

  ngOnInit() {
    this.employees = this.employeeService.getEmployees();
  }

}
