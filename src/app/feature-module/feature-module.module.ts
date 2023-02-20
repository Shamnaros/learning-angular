import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureModuleRoutingModule } from './feature-module-routing.module';
import { FeatureModuleComponent } from './feature-module.component';
import { FeatureComponent } from './feature/feature.component';


@NgModule({
  declarations: [
    FeatureModuleComponent,
    FeatureComponent
  ],
  imports: [
    CommonModule,
    FeatureModuleRoutingModule
  ]
})
export class FeatureModuleModule { }
