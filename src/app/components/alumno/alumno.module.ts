import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnoRoutingModule } from './alumno-routing.module';
import { RegistrarComponent } from './registrar/registrar.component';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegistrarComponent
  ],
  imports: [
    CommonModule,
    AlumnoRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class AlumnoModule { }
