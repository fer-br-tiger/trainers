import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntrenadorRoutingModule } from './entrenador-routing.module';
import { CursosComponent } from './cursos/cursos.component';
import { AlumnosComponent, ConfirmDialog } from './alumnos/alumnos.component';
import { PagosComponent } from './pagos/pagos.component';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormcursoComponent } from './formcurso/formcurso.component';
import { CursosService } from 'src/app/services/cursos.service';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { FormalumnoComponent } from './formalumno/formalumno.component';


@NgModule({
  declarations: [
    CursosComponent,
    AlumnosComponent,
    PagosComponent,
    FormcursoComponent,
    ConfirmDialog,
    FormalumnoComponent
  ],
  imports: [
    CommonModule,
    EntrenadorRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CursosService,
    AlumnosService
  ]
})
export class EntrenadorModule { }
