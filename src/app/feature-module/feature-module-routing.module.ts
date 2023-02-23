import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureModuleComponent } from './feature-module.component';
import { GalleryComponent } from './gallery/gallery.component';


const routes: Routes = [
  { path: 'feature', component: FeatureModuleComponent },
  { path: 'Gallery', component: GalleryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureModuleRoutingModule { }
