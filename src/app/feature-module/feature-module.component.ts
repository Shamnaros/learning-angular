import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-feature-module',
  templateUrl: './feature-module.component.html',
  styleUrls: ['./feature-module.component.css']
})
export class FeatureModuleComponent {
  @ViewChild('widgetsContent')
  widgetsContent!: ElementRef;
  scrollLeft(){
    this.widgetsContent.nativeElement.scrollLeft -= 1150;
  }

  scrollRight(){
    this.widgetsContent.nativeElement.scrollLeft += 1150;
  }
}
