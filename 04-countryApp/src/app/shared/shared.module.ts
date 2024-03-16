import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { SearchboxComponent } from './components/searchbox/searchbox.component';
import { LoaderComponent } from './components/loader/loader.component';



@NgModule({
  declarations: [
    HomePageComponent,
    SidebarComponent,
    AboutPageComponent,
    ContactPageComponent,
    SearchboxComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomePageComponent,
    SidebarComponent,
    AboutPageComponent,
    ContactPageComponent,
    SearchboxComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
