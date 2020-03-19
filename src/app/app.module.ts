import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LateralComponent } from './lateral/lateral.component';
import { FooterComponent } from './footer/footer.component';
import { CoursesComponent } from './courses/courses.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { MainpruebaComponent } from './mainprueba/mainprueba.component';

@NgModule({
  declarations: [
    AppComponent,
    LateralComponent,
    FooterComponent,
    CoursesComponent,
    CabeceraComponent,
    MainpruebaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
