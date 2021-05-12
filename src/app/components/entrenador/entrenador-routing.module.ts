import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { CursosComponent } from './cursos/cursos.component';
import { PagosComponent } from './pagos/pagos.component';

const routes: Routes = [
  {
    path: 'cursos',
    component: CursosComponent
  },
  {
    path: 'alumnos',
    component: AlumnosComponent
  },
  {
    path: 'pagos',
    component: PagosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntrenadorRoutingModule { }
