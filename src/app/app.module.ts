import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/layout/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from './modules/material/material.module';
import { DashboardComponent } from './components/layout/dashboard/dashboard.component';
import { RegistroComponent } from './components/registro/registro.component';
import { EntrenadorModule } from './components/entrenador/entrenador.module';
import { AlumnoModule } from './components/alumno/alumno.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
    HttpClientModule,

    EntrenadorModule,
    AlumnoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
