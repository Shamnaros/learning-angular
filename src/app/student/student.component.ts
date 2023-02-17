import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  // x:string | undefined; 
  names=['AC Air Bus A','AC Air Bus B','AC Air Bus C']
  constructor(){
    // this.name="AngularJs Wiki"
  }

  ngOnInit() {
    
  }
}
