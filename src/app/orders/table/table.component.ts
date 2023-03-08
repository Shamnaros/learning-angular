import { Component, OnDestroy, OnInit } from '@angular/core';
// import * as VANTA from 'vanta';
import * as VANTA from 'vanta/dist/vanta.birds.min.js';
// import * as THREE from 'three';
// import * as VANTA from 'vanta';
// import VANTA from 'vanta/dist/vanta.birds.min.js'




@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnDestroy {

  private vantaInstance: any;

  constructor() {
   
    // VANTA.BIRDS('#element');
  }
  ngOnInit() {
    this.vantaInstance = VANTA.BIRDS({
      el: '#vanta-element',
      backgroundColor: 0x141414,
      color1: 0xff0000,
      color2: 0xffffff,
      colorMode: 'lerpGradient',
      birdSize: 1.20,
      wingSpan: 20.00,
      speedLimit: 6.00,
      separation: 70.00,
      alignment: 80.00,
      cohesion: 75.00
    });
    this.vantaInstance = VANTA.BIRDS('#element3')
  }

  ngOnDestroy() {
    if (this.vantaInstance) {
      this.vantaInstance.destroy();
    }
  }
}
