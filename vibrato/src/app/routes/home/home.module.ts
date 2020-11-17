import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { SharedModule } from '../../shared/shared.module';
import { AboutUsComponent } from '../about-us/about-us.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: HomeComponent },

];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    RouterModule,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent
  ],
  declarations: [
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent
  ],
  entryComponents: [
    HomeComponent
  ]
})
export class HomeModule { }
