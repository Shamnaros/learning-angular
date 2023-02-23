import { Component } from '@angular/core';
import { BootstrapServiceService } from '../bootstrap-service.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent  {
  x:string =''; 
  name: string = '';

  constructor(private UseService:BootstrapServiceService ){
    this.x = UseService.MyProperty4
  }

  setValue() {
    // this.name = 'Nancy';
    this.name = this.x;
  }
  
}
