import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntrenadorRoutingModule } from './entrenador-routing.module';
import { CursosComponent } from './cursos/cursos.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { PagosComponent } from './pagos/pagos.component';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormcursoComponent } from './formcurso/formcurso.component';


@NgModule({
  declarations: [
    CursosComponent,
    AlumnosComponent,
    PagosComponent,
    FormcursoComponent
  ],
  imports: [
    CommonModule,
    EntrenadorRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EntrenadorModule { }
